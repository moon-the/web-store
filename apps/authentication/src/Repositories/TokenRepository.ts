import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Token } from "../Models/Tokens.entity";
import { Users } from "../Models/Users.entity";

export class TokenRepository extends BaseRepository<Token> {
    constructor() {
        super(Token);
    }

    public async findByToken(token: string):Promise<Token> {
        return Token.findOne({
            where: {
                refreshToken: token
            }, 
            include: [Users]
        });
    }

}