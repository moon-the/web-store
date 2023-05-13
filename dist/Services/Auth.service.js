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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const OldToken_entity_1 = require("../models/OldToken.entity");
const Tokens_entity_1 = require("../models/Tokens.entity");
const Users_entity_1 = require("../models/Users.entity");
const OldTokenRepository_1 = require("../Repositories/OldTokenRepository");
const TokenRepository_1 = require("../Repositories/TokenRepository");
const UserRepository_1 = require("../Repositories/UserRepository");
const crypto = require("crypto");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwt, config) {
        this.jwt = jwt;
        this.config = config;
        this.userRepository = new UserRepository_1.UserRepository();
        this.token = new TokenRepository_1.TokenRepository();
        this.oldToken = new OldTokenRepository_1.OldTokenRepository();
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
        });
        AuthService_1.privateKey = privateKey;
        AuthService_1.publicKey = publicKey;
    }
    static getPublicKey() {
        return this.publicKey;
    }
    async register(username, email, password) {
        let user = new Users_entity_1.Users();
        user.email = email;
        user.userName = username, user.password = password;
        user.activated = false;
        return this.userRepository.save(user);
    }
    async findByUserNameOrEmail(username, email) {
        return this.userRepository.findByUserNameOrEmail(username, email);
    }
    async findByEmail(email) {
        return this.userRepository.findByEmail(email);
    }
    async findByUserName(username) {
        return this.userRepository.findByUserName(username);
    }
    async findById(id) {
        return this.userRepository.findById(id);
    }
    async generateAccessToken(username) {
        return this.jwt.signAsync({ username: username }, {
            expiresIn: "30m",
            secret: AuthService_1.privateKey
        });
    }
    async verifyToken(token) {
        try {
            return this.jwt.verify(token, {
                secret: AuthService_1.publicKey
            });
        }
        catch (ex) {
            return null;
        }
    }
    async generateRefeshToken(username) {
        return this.jwt.signAsync({ username: username }, {
            expiresIn: "90d",
            secret: AuthService_1.privateKey
        });
    }
    setToken(idUser, token) {
        const newToken = new Tokens_entity_1.Token();
        newToken.idUser = idUser;
        newToken.refreshToken = token;
        return this.token.save(newToken);
    }
    findToken(token) {
        return this.token.findByToken(token);
    }
    async deleteToken(token) {
        let oldToken = new OldToken_entity_1.OldToken();
        oldToken.idUser = token.idUser;
        oldToken.refreshToken = token.refreshToken;
        this.oldToken.save(oldToken);
        token.destroy();
    }
    async getToken(username) {
        return {
            accessToken: await this.generateAccessToken(username),
            refreshToken: await this.generateRefeshToken(username)
        };
    }
    async generateKeyJWT(obj, time = "15m") {
        return this.jwt.signAsync(obj, {
            expiresIn: time,
            secret: AuthService_1.privateKey
        });
    }
    async updateUser(user) {
        return this.userRepository.update(user);
    }
    async findByUserNameAndEmail(username, email) {
        return this.userRepository.findByUserNameAndEmail(username, email);
    }
    async activated(user) {
        return this.userRepository.update(user);
    }
};
AuthService.privateKey = null;
AuthService.publicKey = null;
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=Auth.service.js.map