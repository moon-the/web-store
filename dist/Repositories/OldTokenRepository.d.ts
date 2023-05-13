import { TokenDTO } from "src/DTO/TokenDTO";
import { Token } from "src/models/Tokens.entity";
import { BaseRepository } from "./BaseRepository";
export declare class OldTokenRepository extends BaseRepository<Token> {
    constructor();
    create(token: TokenDTO): Promise<Token>;
    findByToken(token: string): Promise<Token>;
}
