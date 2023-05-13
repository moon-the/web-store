import { UserLoginDTO } from "src/DTO/UserLoginDTO";
import { UserRegisterDTO } from "src/DTO/UserRegisterDTO";
import { Users } from "src/models/Users.entity";
import { BaseRepository } from "./BaseRepository";
export declare class UserRepository extends BaseRepository<Users> {
    constructor();
    login(user: UserLoginDTO): Promise<Users>;
    create(user: UserRegisterDTO): Promise<Users>;
    findByUserName(username: string): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findByUserNameOrEmail(username: string, email: String): Promise<Users>;
    findByUserNameAndEmail(username: string, email: String): Promise<Users>;
}
