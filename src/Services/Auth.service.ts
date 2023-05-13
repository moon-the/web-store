import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { OldToken } from "src/models/OldToken.entity";
import { Token } from "src/models/Tokens.entity";
import { Users } from "src/models/Users.entity";
import { OldTokenRepository } from "src/Repositories/OldTokenRepository";
import { TokenRepository } from "src/Repositories/TokenRepository";
import { UserRepository } from "src/Repositories/UserRepository";
import * as crypto from "crypto";


@Injectable()
export class AuthService {
    private userRepository: UserRepository;
    private token: TokenRepository;
    private oldToken: OldTokenRepository;
    private static privateKey: string = null;
    private static publicKey: string = null;
    constructor(private jwt: JwtService, private config: ConfigService) {
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
       AuthService.privateKey = privateKey;
       AuthService.publicKey = publicKey;
    }

    static getPublicKey(): string {
        return this.publicKey;
    }

    async register(username: string, email: string, password: string): Promise<Users> {
        let user = new Users();
        user.email = email; user.userName = username, user.password = password;
        user.activated = false;
        return this.userRepository.save(user);
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
            secret: AuthService.privateKey
        });
    }

    async verifyToken(token: string): Promise<object> {
        try {
            return this.jwt.verify(token, {
                secret: AuthService.publicKey
            })
        } catch (ex) {
            return null;
        }

    }

    async generateRefeshToken(username: string): Promise<string> {
        return this.jwt.signAsync({ username: username }, {
            algorithm: "RS256",
            expiresIn: "90d",
            secret: AuthService.privateKey
        });
    }

    setToken(idUser: number, token: string): Promise<Token> {
        const newToken = new Token();
        newToken.idUser = idUser;
        newToken.refreshToken = token;
        return this.token.save(newToken);
    }

    findToken(token: string): Promise<Token> {
        return this.token.findByToken(token);
    }

    public async deleteToken(token: Token) {
        let oldToken = new OldToken();
        oldToken.idUser = token.idUser;
        oldToken.refreshToken = token.refreshToken;
        this.oldToken.save(oldToken);
        token.destroy();
    }

    public async getToken(username: string): Promise<{ accessToken: string, refreshToken: string }> {
        return {
            accessToken: await this.generateAccessToken(username),
            refreshToken: await this.generateRefeshToken(username)
        }
    }

    public async generateKeyJWT(obj: Object, time: string = "15m") {
        return this.jwt.signAsync(obj, {
            algorithm: "RS256",
            expiresIn: time,
            secret: AuthService.privateKey
        });
    }

    public async updateUser(user: Users): Promise<Users> {
        return this.userRepository.update(user);
    }

    public async findByUserNameAndEmail(username: string, email: string): Promise<Users> {
        return this.userRepository.findByUserNameAndEmail(username, email);
    }
    public async activated(user: Users): Promise<Users> {
        return this.userRepository.update(user);
    }
}