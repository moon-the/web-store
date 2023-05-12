import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TokenDTO } from "src/DTO/TokenDTO";
import { UserRegisterDTO } from "src/DTO/UserRegisterDTO";
import { OldToken } from "src/models/OldToken.entity";
import { Token } from "src/models/token.entity";
import { Users } from "src/models/users.entity";
import { OldTokenRepository } from "src/Repositories/OldTokenRepository";
import { TokenRepository } from "src/Repositories/TokenRepository";
import { UserRepository } from "src/Repositories/UserRepository";

@Injectable()
export class AuthService {
    private userRepository: UserRepository;
    private token: TokenRepository;
    private oldToken: OldTokenRepository;
    constructor(private jwt: JwtService, private config: ConfigService) {
        this.userRepository = new UserRepository();
        this.token = new TokenRepository();
        this.oldToken = new OldTokenRepository();
    }

    async register(user: UserRegisterDTO): Promise<Users> {
        const newUser = new Users();
        newUser.userName = user.username;
        newUser.password = user.password;
        newUser.email = user.email;
        newUser.activated = false;
        return this.userRepository.save(newUser);
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
            expiresIn: "30m",
            secret: this.config.get("SECRET_KEY")
        });
    }

    async verifyToken(token: string): Promise<object> {
        try {
            return this.jwt.verify(token, {
                secret: this.config.get("SECRET_KEY")
            })
        } catch (ex) {
            return null;
        }

    }

    async generateRefeshToken(username: string): Promise<string> {
        return this.jwt.signAsync({ username: username }, {
            expiresIn: "90d",
            secret: this.config.get("SECRET_KEY")
        });
    }

    setToken(token: TokenDTO): Promise<Token> {
        const newToken = new Token();
        newToken.refreshToken = token.refreshToken;
        newToken.idUser = token.idUser;
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
            expiresIn: time,
            secret: this.config.get("SECRET_KEY")
        });
    }

    public async updateUser(user: Users):Promise<Users> {
        return this.userRepository.update(user);
    }

    public async findByUserNameAndEmail(username: string, email: string):Promise<Users> {
        return this.userRepository.findByUserNameAndEmail(username, email);
    }
    public async activated(user: Users): Promise<Users> {
        return this.userRepository.update(user);
    }
}