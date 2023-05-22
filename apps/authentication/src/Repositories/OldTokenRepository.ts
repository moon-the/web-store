import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Token } from "../Models/Tokens.entity";


export class OldTokenRepository extends BaseRepository<Token> {
    constructor() {
        super(Token);
    }

    public async findByToken(token: string):Promise<Token> {
        return Token.findOne({
            where: {
                refreshToken: token
            }
        });
    }

}