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
exports.AuthAPI = void 0;
const common_1 = require("@nestjs/common");
const UserRegisterDTO_1 = require("../../DTO/UserRegisterDTO");
const UserLoginDTO_1 = require("../../DTO/UserLoginDTO");
const Auth_service_1 = require("../../Services/Auth.service");
const bcrypt = require("bcrypt");
const ForgotPasswordDTO_1 = require("../../DTO/ForgotPasswordDTO");
const ResetPasswordDTO_1 = require("../../DTO/ResetPasswordDTO");
let AuthAPI = class AuthAPI {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req, res) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.username);
        if (user) {
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
            return "tài khoản không tồn tại";
        }
    }
    async register(req) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.email);
        if (!user) {
            let salt = await bcrypt.genSalt();
            req.password = await bcrypt.hash(req.password, salt);
            user = await this.authService.register(req.username, req.email, req.password);
            if (user) {
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
    async forgot(req) {
        const user = await this.authService.findByUserName(req.username) &&
            await this.authService.findByEmail(req.email);
        if (user) {
        }
        return {
            status: 402,
            message: "yêu cầu không hợp lệ"
        };
    }
    async logoutPost(body, req) {
        let refreshToken = body.refreshToken || req.cookies.refreshToken;
        if (refreshToken) {
            let token = await this.authService.findToken(refreshToken);
            if (token) {
                this.authService.deleteToken(token);
            }
        }
    }
    async reset(key, req) {
        if (req.newPassword == req.confirmPassword) {
            const decode = await this.authService.verifyToken(key);
            if (decode) {
                let idUser = decode.id;
                let user = await this.authService.findById(idUser);
                if (user) {
                    let salt = await bcrypt.genSalt();
                    let password = await bcrypt.hash(req.newPassword, salt);
                    user.password = password;
                    user = await this.authService.updateUser(user);
                }
            }
        }
        return key;
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLoginDTO_1.UserLoginDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "login", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserRegisterDTO_1.UserRegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "register", null);
__decorate([
    (0, common_1.Get)("get_token"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "getAccessToken", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("forgot_password"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordDTO_1.ForgotPasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "forgot", null);
__decorate([
    (0, common_1.Delete)("logout"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "logoutPost", null);
__decorate([
    (0, common_1.Patch)("reset_password/:key"),
    __param(0, (0, common_1.Param)("key")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ResetPasswordDTO_1.ResetPasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthAPI.prototype, "reset", null);
AuthAPI = __decorate([
    (0, common_1.Controller)("/api/v1/user"),
    __metadata("design:paramtypes", [Auth_service_1.AuthService])
], AuthAPI);
exports.AuthAPI = AuthAPI;
//# sourceMappingURL=Auth.api.js.map