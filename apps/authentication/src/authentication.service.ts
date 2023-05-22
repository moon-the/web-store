import { ConflictException, HttpException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Cache } from "cache-manager";
import * as crypto from "crypto";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "./Repositories/UserRepository";
import { TokenRepository } from "./Repositories/TokenRepository";
import { OldTokenRepository } from "./Repositories/OldTokenRepository";
import { Users } from "./Models/Users.entity";
import { Token } from "./Models/Tokens.entity";
import { OldToken } from "./Models/OldToken.entity";
import { UserLoginDTO } from "@app/common/Authentication/UserLoginDTO";
import { UserRegisterDTO } from "@app/common/Authentication/UserRegisterDTO";
import { ForgotPasswordDTO } from "@app/common/Authentication/ForgotPasswordDTO";
import { ResetPasswordDTO } from "@app/common/Authentication/ResetPasswordDTO";
import { ActivatedDTO } from "@app/common/Authentication/activated.dto";
import { ActivatedReponse } from "@app/common/Authentication/Responses/activated-response";

@Injectable()
export class AuthenticationService {

  private userRepository: UserRepository;
    private token: TokenRepository;
    private oldToken: OldTokenRepository;
    private static privateKey: string = null;
    private static publicKey: string = null;
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private jwt: JwtService, private config: ConfigService) {
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

    async login(user: UserLoginDTO) {
        let u = await this.findByUserNameOrEmail(user.username, user.username);
        if (u) {
            let check = await bcrypt.compare(user.password, u.password);
            if (check) {
                let refreshToken = await this.generateRefeshToken(u.userName);
                let user = await this.findByUserName(u.userName);
                this.cacheManager.set(refreshToken, user, 90 * 1000 * 60 * 60 * 24);
                let token = {
                    accessToken: await this.generateAccessToken(u.userName),
                    refreshToken: refreshToken
                }
                if (u.activated) {
                    await this.setToken(u.id, token.refreshToken);
                    return token;
                } else {
                    throw new UnauthorizedException("Tài Khoản chưa được kích hoạt")
                }
            }
            else {
                throw new UnauthorizedException("Sai Mật Khẩu")
            }
        }
        else {
            throw new NotFoundException("Không tìm thấy tài khoản");
        }
    }

    async register(user: UserRegisterDTO) {
        let u = await this.findByUserNameOrEmail(user.username, user.email);
        if (!u) {
            let salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, salt);
            u = new Users();
            u.email = user.email; u.userName = user.username, u.password = user.password;
            u.activated = false;
            u = await this.userRepository.save(user);
            delete u.password;
            let token = await this.generateKeyJWT({ idActivated: u.id });
            return token;
        }
        else {
            if (user.username == u.userName)
                throw new ConflictException("username đã tồn tại")
            else
                throw new ConflictException("email đã tồn tại")
        }
    }

    async forgetPassword(forget: ForgotPasswordDTO, host: string) {
        const user = await this.findByUserNameAndEmail(forget.username, forget.email);
        if (user) {
            let token = await this.generateKeyJWT({ idForget: user.id });
            return "OK";
        }
        throw new UnauthorizedException("Yêu cầu không hợp lệ");
    }

    async resetPassword(key: string, resetPass: ResetPasswordDTO) {
        if (resetPass.newPassword == resetPass.confirmPassword) {
            const decode = await this.verifyToken(key);
            if (decode) {
                let idUser = (<any>decode).idForget;
                let user = await this.findById(idUser);
                if (user) {
                    let salt = await bcrypt.genSalt();
                    let password = await bcrypt.hash(resetPass.newPassword, salt);
                    user.password = password;
                    user = await this.updateUser(user);
                    return "OK";
                }
            }
            throw new UnauthorizedException("key reset password error");
        }
        throw new NotFoundException("confirm password dose not match");
    }

    async logout(refreshToken: string) {
        if (refreshToken) {
            let token = await this.findToken(refreshToken);
            if (token) {
                this.deleteToken(token);
                return "OK";
            }
        }
        throw new NotFoundException("");
    }

    async getToken(t: string) {
        let token = <any> (await this.findToken(t));
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

    async reactivated(token: string, link: string) {
        let decode = this.verifyToken(token);
        let username = (<any>decode).username || null;
        if (username) {
            let user = await this.findByUserName(username);
            let token_ = await this.generateKeyJWT({ idActivated: user.id });
            return "OK";
        }
        throw new NotFoundException("Đường dẫn không đúng");
    }


    public async findByUserNameOrEmail(username: string, email: string): Promise<Users> {
        return this.userRepository.findByUserNameOrEmail(username, email);
    }

    public async findByEmail(email: string): Promise<Users> {
        return this.userRepository.findByEmail(email);
    }

    public async findByUserName(username: string): Promise<Users> {
        let user = <Users>await this.cacheManager.get(username);
        if (!user) {
            user = await this.userRepository.findByUserName(username);
            await this.cacheManager.set(username, user);
        }
        return user;
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
        let t = <Token> await this.cacheManager.get(token);
        if (!t) {
            let token_ = await this.token.findByToken(token);
            if(token_) 
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

    public async findByUserNameAndEmail(username: string, email: string) {
        return this.userRepository.findByUserNameAndEmail(username, email);
    }
    public async activated(key: ActivatedDTO) {
        const decode = await this.verifyToken(key.token);
        if (decode) {
            let idUser = (<any>decode).idActivated || null;
            let user = await this.findById(idUser);
            if (user) {
                if (!user.activated) {
                    user.activated = !user.activated;
                    user = await this.userRepository.update(user);
                    if (user != null) {
                        return "";
                    }
                }
                else {
                    throw new ConflictException();
                }
            }
            else {
                throw new UnauthorizedException("mã kích hoạt không hợp lệ")
            }
        }
        throw new UnauthorizedException("Đường dẫn không hợp lệ");
    }
}
