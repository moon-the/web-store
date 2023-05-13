import { TokenDTO } from "src/DTO/TokenDTO";
import { UserRegisterDTO } from "src/DTO/UserRegisterDTO";
import { Token } from "src/models/Tokens.entity";
import { BaseRepository } from "./BaseRepository";

export class OldTokenRepository extends BaseRepository<Token> {
    constructor() {
        super(Token);
    }

    public async create(token: TokenDTO) {
        return Token.create({
            refreshToken: token.refreshToken,
            info: token.info,
            ip: token.ip,
            mac: token.mac,
            idUser: token.idUser
        });
    }

    public async findByToken(token: string):Promise<Token> {
        return Token.findOne({
            where: {
                refreshToken: token
            }
        });
    }

}