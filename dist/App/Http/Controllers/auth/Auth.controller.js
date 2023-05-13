"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const UserRegisterDTO_1 = require("../../../../DTO/UserRegisterDTO");
const UserLoginDTO_1 = require("../../../../DTO/UserLoginDTO");
const Auth_service_1 = require("../../../../Services/Auth.service");
const bcrypt = require("bcrypt");
const ForgotPasswordDTO_1 = require("../../../../DTO/ForgotPasswordDTO");
const TokenDTO_1 = require("../../../../DTO/TokenDTO");
const exceptions_1 = require("@nestjs/common/exceptions");
const ResetPasswordDTO_1 = require("../../../../DTO/ResetPasswordDTO");
const config_1 = require("@nestjs/config");
const ActiveAccount_email_1 = require("../../../Mail/ActiveAccount.email");
let AuthController = class AuthController {
    constructor(authService, config) {
        this.authService = authService;
        this.config = config;
    }
    async getlogin(req, res) {
        let token = req.cookies.accessToken;
        if (token) {
            let decode = this.authService.verifyToken(token);
            if (decode) {
                return res.redirect("./home");
            }
        }
        return res.render("login");
    }
    async resetPass(key) {
        const decode = await this.authService.verifyToken(key);
        if (decode) {
            return;
        }
        throw new exceptions_1.ForbiddenException();
    }
    async login(req, res) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.username);
        if (user) {
            if (user.activated) {
                let check = await bcrypt.compare(req.password, user.password);
                if (check) {
                    let token = await this.authService.getToken(user.userName);
                    await this.authService.setToken(user.id, token.refreshToken);
                    res.cookie("refreshToken", token.refreshToken);
                    res.cookie("accessToken", token.accessToken);
                    return token;
                }
                else {
                    return "sai mật khẩu";
                }
            }
            else {
                return "tài khoản chưa được kích hoạt";
            }
        }
        else {
            return "tài khoản không tồn tại";
        }
    }
    getRegister() {
        return {};
    }
    getPublicKey() {
        return Auth_service_1.AuthService.getPublicKey();
    }
    async register(req, requet) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.email);
        if (!user) {
            let salt = await bcrypt.genSalt();
            req.password = await bcrypt.hash(req.password, salt);
            user = await this.authService.register(req.username, req.email, req.password);
            if (user) {
                let token = await this.authService.generateKeyJWT({ idActivated: user.id });
                let activated = new ActiveAccount_email_1.ActiveAccountEmail(this.config);
                let link = `${requet.protocol}://${requet.get("host")}/activated/${token}`;
                activated.create(req.email, link);
                activated.sendEmail();
                return { status: 200, message: "OK" };
            }
        }
        return req.username == user.userName ? {
            status: 402,
            message: "username đã tồn tại"
        } : {
            status: 402,
            message: "email đã tồn tại"
        };
    }
    async accessToken(req) {
        let token = await this.authService.findToken(req.refreshToken);
        if (token) {
            const decode = await this.authService.verifyToken(req.refreshToken);
            if (decode) {
                let user = decode.username;
                return {
                    accessToken: await this.authService.generateAccessToken(user),
                    refreshToken: req.refreshToken
                };
            }
        }
        return {
            status: 402,
            message: "token expired"
        };
    }
    async getAccessToken(req) {
        if (req.cookies.refreshToken) {
            let token = await this.authService.findToken(req.cookies.refreshToken);
            if (token) {
                const decode = await this.authService.verifyToken(req.cookies.refreshToken);
                if (decode) {
                    let user = decode.username;
                    return {
                        accessToken: await this.authService.generateAccessToken(user),
                        refreshToken: req.cookies.refreshToken
                    };
                }
            }
        }
        return {
            status: 402,
            message: "token expired"
        };
    }
    async getForgot() {
        return;
    }
    async forgot(req, requet) {
        const user = await this.authService.findByUserNameAndEmail(req.username, req.email);
        if (user) {
            let token = await this.authService.generateKeyJWT({ idForget: user.id });
            let activated = new ActiveAccount_email_1.ActiveAccountEmail(this.config);
            let link = `${requet.protocol}://${requet.get("host")}/reset_password/${token}`;
            activated.create(req.email, link);
            activated.sendEmail();
            return "OK";
        }
        return {
            status: 402,
            message: "yêu cầu không hợp lệ"
        };
    }
    async reActivated(req, key, res) {
        let token = req.cookies.accessToken;
        if (token) {
            let decode = this.authService.verifyToken(token);
            let idUser = decode.idActivated || null;
            if (idUser) {
                let user = await this.authService.findById(idUser);
                let activated = new ActiveAccount_email_1.ActiveAccountEmail(this.config);
                let link = `${req.protocol}://${req.get("host")}/reset_password/${token}`;
                activated.create(user.email, link);
                activated.sendEmail();
                return { status: 200, message: "OK" };
            }
        }
        throw new exceptions_1.HttpException({ message: "Link không hợp lệ" }, common_1.HttpStatus.UNAUTHORIZED);
    }
    async activated(key, req, res) {
        const decode = await this.authService.verifyToken(key);
        if (decode) {
            let idUser = decode.idActivated || null;
            let user = await this.authService.findById(idUser);
            if (user) {
                if (!user.activated) {
                    user.activated = !user.activated;
                    user = await this.authService.activated(user);
                    if (user != null) {
                        res.status(201);
                        return res.redirect(`${req.protocol}://${req.get("host")}/user/login`);
                    }
                }
            }
        }
        throw new exceptions_1.HttpException({ message: "Link không hợp lệ" }, common_1.HttpStatus.UNAUTHORIZED);
    }
    async logout(req) {
        let refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
            let token = await this.authService.findToken(refreshToken);
            if (token) {
                this.authService.deleteToken(token);
            }
        }
    }
    async reset(key, req, Res) {
        if (req.newPassword == req.confirmPassword) {
            const decode = await this.authService.verifyToken(key);
            if (decode) {
                let idUser = decode.idForget || null;
                let user = await this.authService.findById(idUser);
                let salt = await bcrypt.genSalt();
                let password = await bcrypt.hash(req.newPassword, salt);
                user.password = password;
                user = await this.authService.updateUser(user);
                return Res.redirect("login");
            }
            else {
                throw new exceptions_1.ForbiddenException();
            }
        }
        else {
            Res.redirect("reset_password/" + key);
        }
    }
};
__decorate([
    (0, common_1.Get)("login"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getlogin", null);
__decorate([
    (0, common_1.Get)("reset_password/:key"),
    (0, common_1.Render)('resetPassword'),
    __param(0, (0, common_1.Param)("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPass", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLoginDTO_1.UserLoginDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("register"),
    (0, common_1.Render)("signup"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getRegister", null);
__decorate([
    (0, common_1.Get)("getkey"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getPublicKey", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserRegisterDTO_1.UserRegisterDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("get_token"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TokenDTO_1.TokenDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "accessToken", null);
__decorate([
    (0, common_1.Get)("get_token"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAccessToken", null);
__decorate([
    (0, common_1.Get)("forgot_password"),
    (0, common_1.Render)("forgotPassword"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getForgot", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("forget_password"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordDTO_1.ForgotPasswordDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgot", null);
__decorate([
    (0, common_1.Post)("reactivated"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("key")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "reActivated", null);
__decorate([
    (0, common_1.Get)("activated/:key"),
    __param(0, (0, common_1.Param)("key")),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activated", null);
__decorate([
    (0, common_1.Get)("logout"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)("reset_password/:key"),
    __param(0, (0, common_1.Param)("key")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ResetPasswordDTO_1.ResetPasswordDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "reset", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [Auth_service_1.AuthService, config_1.ConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=Auth.controller.js.map