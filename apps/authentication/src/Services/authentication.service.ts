import { ConflictException, HttpException, HttpStatus, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Cache } from "cache-manager";
import * as crypto from "crypto";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from "@app/common/Authentication/UserLoginDTO";
import { UserRegisterDTO } from "@app/common/Authentication/UserRegisterDTO";
import { ForgotPasswordDTO } from "@app/common/Authentication/ForgotPasswordDTO";
import { ResetPasswordDTO } from "@app/common/Authentication/ResetPasswordDTO";
import { UserRepository } from "../Repositories/UserRepository";
import { TokenRepository } from "../Repositories/TokenRepository";
import { OldTokenRepository } from "../Repositories/OldTokenRepository";
import { Users } from "../Models/Users.entity";
import { Token } from "../Models/Tokens.entity";
import { OldToken } from "../Models/OldToken.entity";
import { LoginResponse } from "@app/common/authentication/Responses/login-response";
import { ActivatedDTO } from "@app/common/Authentication/activated.dto";
import { ActivatedReponse } from "@app/common/Authentication/Responses/activated-response";
import { RegisterReponse } from "@app/common/authentication/Responses/register-response";
import { authenticator } from "otplib";
import * as QRcode from 'qrcode';
import { VerifyOTPResponse } from "@app/common/Authentication/Responses/VerifyOTP-response";
import { OpenOTPReponse } from "@app/common/Authentication/Responses/OpenOTP-response";
import { ForgetPasswordResponse } from "@app/common/Authentication/Responses/forgetPassword-response";
import { ResetPasswordResponse } from "@app/common/Authentication/Responses/resetPassword-response";
import { ReactivatedReponse } from "@app/common/Authentication/Responses/reactivated-response";
import { MailService } from "@app/mail";
@Injectable()
export class AuthenticationService {

    private userRepository: UserRepository;
    private token: TokenRepository;
    private oldToken: OldTokenRepository;
    private static privateKey: string = null;
    private static publicKey: string = null;
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private jwt: JwtService, private config: ConfigService, private mailerClient: MailService) {
        this.userRepository = new UserRepository();
        this.token = new TokenRepository();
        this.oldToken = new OldTokenRepository();
    }

    static generateKey() {
        let { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            }
        })
        AuthenticationService.privateKey = privateKey;
        AuthenticationService.publicKey = publicKey;
    }

    static getPublicKey(): string {
        return this.publicKey;
    }

    async open2FA(token: string): Promise<OpenOTPReponse> {
        let username = (<any>(await this.verifyToken(token))).username;
        let secret = authenticator.generateSecret();
        let user = await this.userRepository.findByUserName(username);
        user.open2FA = true;
        user.key2FA = secret;
        this.userRepository.update(user);
        let otp = authenticator.keyuri(username, "ecommerce", secret);
        let qrcode = await QRcode.toDataURL(otp);
        return {
            status: HttpStatus.CREATED,
            message: "success",
            data: {
                image: qrcode,
                urlOTP: otp
            },
            errors: null
        };
    }

    async verifyOTP(token: string, otp: string): Promise<VerifyOTPResponse> {
        let username = (<any>(await this.verifyToken(token))).username;
        let user = await this.userRepository.findByUserName(username);
        let check = authenticator.verify({ token: otp, secret: user.key2FA });
        if (check) {
            let refreshToken = await this.generateRefeshToken(user.userName);
            this.cacheManager.set(refreshToken, user, 90 * 1000 * 60 * 60 * 24);
            return {
                status: HttpStatus.ACCEPTED,
                message: "success",
                data: {
                    accessToken: await this.generateAccessToken(user.userName),
                    refreshToken: refreshToken
                },
                errors: null

            };
        }
        return {
            status: HttpStatus.UNAUTHORIZED,
            message: "otp cannot verify",
            data: null,
            errors: {
                otp: {
                    message: "Invalid otp",
                    path: "verify"
                }
            }

        };
    }

    async login(user: UserLoginDTO): Promise<LoginResponse> {
        let u = await this.findByUserNameOrEmail(user.username, user.username);
        if (u) {
            let check = await bcrypt.compare(user.password, u.password);
            if (check) {
                if (!u.open2FA) {
                    let refreshToken = await this.generateRefeshToken(u.userName);
                    this.cacheManager.set(refreshToken, u, 90 * 1000 * 60 * 60 * 24);
                    let token = {
                        accessToken: await this.generateAccessToken(u.userName),
                        refreshToken: refreshToken
                    }
                    if (u.activated) {
                        await this.setToken(u.id, token.refreshToken);
                        return {
                            status: HttpStatus.OK,
                            message: "login success",
                            data: {
                                user: {
                                    id: u.id,
                                    email: u.email,
                                    token: token
                                }, token: token
                            },
                            errors: null
                        };
                    } else {
                        return {
                            status: HttpStatus.UNAUTHORIZED, message: "account not activated",
                            data: null,
                            errors: null
                        };
                    }
                }
                else {
                    return {
                        status: HttpStatus.UNAUTHORIZED,
                        message: "account need otp authentication",
                        data: {
                            user: null,
                            token: {
                                verifyToken: await this.generateAccessToken(u.userName)
                            }
                        },
                        errors: null
                    };
                }
            }
        }
        else {
            return {
                status: HttpStatus.NOT_FOUND, message: "wrong login", data: null, errors: null
            };
        }
    }
    //
    async register(user: UserRegisterDTO): Promise<RegisterReponse> {
        let u = await this.findByUserNameOrEmail(user.username, user.email);
        if (!u) {
            let salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, salt);
            u = new Users();
            u.email = user.email; u.userName = user.username, u.password = user.password;
            u.activated = false;
            let token = await this.generateKeyJWT({ idActivated: u.id });
            u.keyActivated = token;
            u = await this.userRepository.save(user);
            delete u.password;
            await this.mailerClient.sendEmail({
                user: { id: u.id, email: user.email, token: { token: token } },
                subject: 'Activated Account',
                template: "",
                context: {
                    link: this.config.get("HOST"),
                },
            });
            return {
                status: HttpStatus.CREATED,
                message: "create success",
                data: null,
                errors: null
            };
        }
        return {
            status: HttpStatus.CONFLICT,
            message: "Account already exists",
            data: null,
            errors: {
                user: u.userName == user.username ? "username already exists" : "email already exists"
            }
        };
    }
    //
    async forgetPassword(forget: ForgotPasswordDTO): Promise<ForgetPasswordResponse> {
        const user = await this.findByUserNameAndEmail(forget.username, forget.email);
        if (user) {
            let token = await this.generateKeyJWT({ idForget: user.id });
            user.keyForgetPassword = token;
            this.userRepository.update(user);
            await this.mailerClient.sendEmail({
                user: { id: user.id, email: user.email, token: { token: token } },
                subject: 'reset password',
                template: "",
                context: {
                    link: this.config.get("HOST"),
                },
            });
            return {
                status: HttpStatus.CREATED,
                message: "success",
                data: { email: forget.email },
                errors: null
            };
        }
        return {
            status: HttpStatus.NOT_FOUND,
            message: "Can't find account",
            data: { email: forget.email },
            errors: null
        }
    }

    async resetPassword(key: string, resetPass: ResetPasswordDTO): Promise<ResetPasswordResponse> {
        if (resetPass.newPassword == resetPass.confirmPassword) {
            const decode = await this.verifyToken(key);
            if (decode) {
                let idUser = (<any>decode).idForget;
                let user = await this.findById(idUser);
                if (user) {
                    user.keyForgetPassword = "";
                    let salt = await bcrypt.genSalt();
                    let password = await bcrypt.hash(resetPass.newPassword, salt);
                    user.password = password;
                    user = await this.updateUser(user);
                    return {
                        status: HttpStatus.CREATED,
                        message: "success",
                        data: null,
                        errors: null
                    };
                }
            }
            return {
                status: HttpStatus.UNAUTHORIZED,
                message: "token không đúng",
                data: null,
                errors: null
            }
        }
        return {
            status: HttpStatus.PRECONDITION_FAILED,
            message: "mật khẩu không đúng",
            data: null,
            errors: null
        }
    }

    async logout(refreshToken: string): Promise<{ status: number, message: string }> {
        if (refreshToken) {
            let token = await this.findToken(refreshToken);
            if (token) {
                this.deleteToken(token);
                return {
                    status: HttpStatus.ACCEPTED,
                    message: "success"
                };
            }
        }
        return {
            status: HttpStatus.UNAUTHORIZED,
            message: ""
        };
    }

    async logoutAll(accessToken: string): Promise<{ status: number, message: string }> {
        let token = await this.verifyToken(accessToken)
        if (token) {
            let username = (<any>token).username;
            let users = await this.findByUserName(username);
            users.token.forEach(element => {
                this.deleteToken(element);
            });
            return {
                status: HttpStatus.ACCEPTED,
                message: "success"
            };
        }
        return {
            status: HttpStatus.UNAUTHORIZED,
            message: "success"
        };
    }

    async getToken(t: string) {
        let token = (await this.findToken(t));
        if (token) {
            const decode = await this.verifyToken(t);
            if (decode) {
                let user = (<any>decode).username;
                return {
                    accessToken: await this.generateAccessToken(user),
                    refreshToken: t
                }
            }
            else throw new UnauthorizedException("Mã Token hết hạn");
        }
        else throw new UnauthorizedException("Mã Token không đúng hoặc đã hết hạn")
    }

    async reactivated(token: string): Promise<ReactivatedReponse> {
        let decode = this.verifyToken(token);
        let username = (<any>decode).username || null;
        if (username) {
            let user = await this.findByUserName(username);
            let token_ = await this.generateKeyJWT({ idActivated: user.id });
            user.keyActivated = token_;
            this.userRepository.update(user);
            await this.mailerClient.sendEmail({
                user: { id: user.id, email: user.email, token: { token: token_ } },
                subject: 'ReActivated Account',
                template: "",
                context: {
                    link: this.config.get("HOST"),
                },
            });
            return {
                status: HttpStatus.CREATED,
                message: "success",
                data: { email: user.email },
                errors: null
            };
        }
        return {
            status: HttpStatus.UNAUTHORIZED,
            message: "",
            data: null,
            errors: null
        };
    }


    public async findByUserNameOrEmail(username: string, email: string): Promise<Users> {
        return this.userRepository.findByUserNameOrEmail(username, email);
    }

    public async findByEmail(email: string): Promise<Users> {
        return this.userRepository.findByEmail(email);
    }

    public async findByUserName(username: string): Promise<Users> {
        return this.userRepository.findByUserName(username);
    }

    public async findById(id: number): Promise<Users> {
        return this.userRepository.findById(id);
    }

    async generateAccessToken(username: string): Promise<string> {
        return this.jwt.signAsync({ username: username }, {
            algorithm: "RS256",
            expiresIn: "30m",
            secret: AuthenticationService.privateKey
        });
    }

    async verifyToken(token: string): Promise<object> {
        try {
            return this.jwt.verify(token, {
                secret: AuthenticationService.publicKey
            })
        } catch (ex) {
            return null;
        }

    }

    async generateRefeshToken(username: string): Promise<string> {
        return this.jwt.signAsync({ username: username }, {
            algorithm: "RS256",
            expiresIn: "90d",
            secret: AuthenticationService.privateKey
        });
    }

    async setToken(idUser: number, token: string) {
        const newToken = new Token();
        newToken.idUser = idUser;
        newToken.refreshToken = token;
        return await this.token.save(newToken);
    }

    async findToken(token: string) {
        let t = <Token>await this.cacheManager.get(token);
        if (!t) {
            let token_ = await this.token.findByToken(token);
            if (token_)
                this.cacheManager.set(token, token_.user.userName);
            else throw new UnauthorizedException("token không đúng")
        }
        return t;
    }

    public async deleteToken(token: Token) {
        this.cacheManager.del(token.refreshToken);
        let oldToken = new OldToken();
        oldToken.idUser = token.idUser;
        oldToken.refreshToken = token.refreshToken;
        oldToken.idMetaData = token.idMetaData;
        this.oldToken.save(oldToken);
        token.destroy();
    }

    public async generateKeyJWT(obj: Object, time: string = "15m") {
        return this.jwt.signAsync(obj, {
            algorithm: "RS256",
            expiresIn: time,
            secret: AuthenticationService.privateKey
        });
    }

    public async updateUser(user: Users): Promise<Users> {
        return this.userRepository.update(user);
    }

    public async findByUserNameAndEmail(username: string, email: string): Promise<Users> {
        return this.userRepository.findByUserNameAndEmail(username, email);
    }

    public async activated(key: ActivatedDTO): Promise<ActivatedReponse> {
        const decode = await this.verifyToken(key.token);
        if (decode) {
            let idUser = (<any>decode).idActivated || null;
            let user = await this.findById(idUser);
            if (user) {
                if (!user.activated) {
                    if (user.keyActivated == key.token) {
                        user.activated = !user.activated;
                        user = await this.userRepository.update(user);
                        if (user != null) {
                            return {
                                status: HttpStatus.CREATED,
                                message: "activate success",
                                data: null,
                                errors: null
                            };
                        }
                    }
                    else {
                        return {
                            status: HttpStatus.UNAUTHORIZED,
                            message: "mã kích hoạt hết hạn",
                            data: null, errors: null
                        }
                    }
                }
                else {
                    return {
                        status: HttpStatus.NOT_ACCEPTABLE,
                        message: "Tài khoản này đã được kích hoạt",
                        data: null, errors: null
                    }
                }
            }
            else {
                return {
                    status: HttpStatus.NOT_FOUND,
                    message: "Tài khoản không tồn tại",
                    data: null, errors: null
                }
            }
        }
        return {
            status: HttpStatus.UNAUTHORIZED,
            message: "mã kích hoạt không đúng",
            data: null, errors: null
        }
    }
}
