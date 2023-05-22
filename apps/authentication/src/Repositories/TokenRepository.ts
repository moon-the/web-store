import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Token } from "../Models/Tokens.entity";
<<<<<<< HEAD
=======
import { Users } from "../Models/Users.entity";
>>>>>>> main

export class TokenRepository extends BaseRepository<Token> {
    constructor() {
        super(Token);
    }

    public async findByToken(token: string):Promise<Token> {
        return Token.findOne({
            where: {
                refreshToken: token
<<<<<<< HEAD
            }
=======
            }, 
            include: [Users]
>>>>>>> main
        });
    }

}