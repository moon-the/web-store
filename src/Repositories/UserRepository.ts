import { Op } from "sequelize";
import { UserLoginDTO } from "src/DTO/UserLoginDTO";
import { UserRegisterDTO } from "src/DTO/UserRegisterDTO";
import { Profile } from "src/models/Profiles.entity";
import { Users } from "src/models/Users.entity";
import { BaseRepository } from "./BaseRepository";
import { Roles } from "src/models/Roles.entity";

export class UserRepository extends BaseRepository<Users> {
    constructor() {
        super(Users);
    }
    public async login(user: UserLoginDTO): Promise<Users> {
        console.log("username = " + user.username)
        console.log("password = " + user.password)
        return Users.findOne({
            where: {
                "username": user.username,
                "password": user.password
            },
            include: [Profile]
        });

    }

    public async create(user: UserRegisterDTO): Promise<Users> {
        return Users.create({
            userName: user.username,
            password: user.password,
            email: user.email
        });
    }

    public async findByUserName(username: string) {
        return Users.findOne({
            where: {
                userName: username
            }, 
            include: [Profile, Roles]
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