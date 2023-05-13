import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Token } from "src/models/Tokens.entity";
import { Users } from "src/models/Users.entity";
export declare class AuthService {
    private jwt;
    private config;
    private userRepository;
    private token;
    private oldToken;
    private static privateKey;
    private static publicKey;
    constructor(jwt: JwtService, config: ConfigService);
    static generateKey(): void;
    static getPublicKey(): string;
    register(username: string, email: string, password: string): Promise<Users>;
    findByUserNameOrEmail(username: string, email: string): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findByUserName(username: string): Promise<Users>;
    findById(id: number): Promise<Users>;
    generateAccessToken(username: string): Promise<string>;
    verifyToken(token: string): Promise<object>;
    generateRefeshToken(username: string): Promise<string>;
    setToken(idUser: number, token: string): Promise<Token>;
    findToken(token: string): Promise<Token>;
    deleteToken(token: Token): Promise<void>;
    getToken(username: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateKeyJWT(obj: Object, time?: string): Promise<string>;
    updateUser(user: Users): Promise<Users>;
    findByUserNameAndEmail(username: string, email: string): Promise<Users>;
    activated(user: Users): Promise<Users>;
}
