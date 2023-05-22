 import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Op } from "sequelize";
<<<<<<< HEAD:apps/authentication/src/Repositories/UserRepository.ts
import { Users } from "../Models/Users.entity";
import { Profile } from "../Models/Profiles.entity";
import { Roles } from "../Models/Roles.entity";

=======
<<<<<<< Updated upstream:src/Repositories/UserRepository.ts
import { UserLoginDTO } from "src/DTO/UserLoginDTO";
import { UserRegisterDTO } from "src/DTO/UserRegisterDTO";
import { Profile } from "src/models/profiles.entity";
import { Users } from "src/models/Users.entity";
import { BaseRepository } from "./BaseRepository";
=======
import { Users } from "../Models/Users.entity";
import { Profile } from "../Models/Profiles.entity";
import { Roles } from "../Models/Roles.entity";
import { Token } from "../Models/Tokens.entity";

>>>>>>> Stashed changes:apps/authentication/src/Repositories/UserRepository.ts
>>>>>>> main:src/Repositories/UserRepository.ts

export class UserRepository extends BaseRepository<Users> {
    constructor() {
        super(Users);
    }
    public async login(username: string, password: string): Promise<Users> {
        let user = await Users.findOne({
            where: {
                "username": username,
                "password": password
            },
            include: [Profile]
        });
        user.password = null;
        return Users.findOne({
            where: {
                "username": username,
                "password": password
            },
            include: [Profile]
        });

    }

    public async create(username: string, password: string, email: string): Promise<Users> {
        return Users.create({
            userName: username,
            password: password,
            email: email
        });
    }

    public async findByUserName(username: string) {
        return Users.findOne({
            where: {
                userName: username
<<<<<<< HEAD:apps/authentication/src/Repositories/UserRepository.ts
            }, 
            include: [Profile, Roles]
=======
<<<<<<< Updated upstream:src/Repositories/UserRepository.ts
            }
=======
            }, 
            include: [Profile, Roles, Token]
>>>>>>> Stashed changes:apps/authentication/src/Repositories/UserRepository.ts
>>>>>>> main:src/Repositories/UserRepository.ts
        });
    }

    public findByEmail(email: string): Promise<Users> {
        return Users.findOne({
            where: {
                email: email
            }
        });
    }

    public async findByUserNameOrEmail(username: string, email: String) {
        return Users.findOne({
            where: {
                [Op.or]: [
                    { userName: username },
                    { email: email }
                ]
            }
        });
    }

    public async findByUserNameAndEmail(username: string, email: String) {
        return Users.findOne({
            where: {
                userName: username,
                email: email
            }
        });
    }

}