"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRepository = void 0;
const Tokens_entity_1 = require("../models/Tokens.entity");
const BaseRepository_1 = require("./BaseRepository");
class TokenRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Tokens_entity_1.Token);
    }
    async create(token) {
        return Tokens_entity_1.Token.create({
            refreshToken: token.refreshToken,
            info: token.info,
            ip: token.ip,
            mac: token.mac,
            idUser: token.idUser
        });
    }
    async findByToken(token) {
        return Tokens_entity_1.Token.findOne({
            where: {
                refreshToken: token
            }
        });
    }
}
exports.TokenRepository = TokenRepository;
//# sourceMappingURL=TokenRepository.js.map