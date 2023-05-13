"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const sequelize_1 = require("sequelize");
const profiles_entity_1 = require("../models/profiles.entity");
const Users_entity_1 = require("../models/Users.entity");
const BaseRepository_1 = require("./BaseRepository");
class UserRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Users_entity_1.Users);
    }
    async login(user) {
        console.log("username = " + user.username);
        console.log("password = " + user.password);
        return Users_entity_1.Users.findOne({
            where: {
                "username": user.username,
                "password": user.password
            },
            include: [profiles_entity_1.Profile]
        });
    }
    async create(user) {
        return Users_entity_1.Users.create({
            userName: user.username,
            password: user.password,
            email: user.email
        });
    }
    async findByUserName(username) {
        return Users_entity_1.Users.findOne({
            where: {
                userName: username
            }
        });
    }
    findByEmail(email) {
        return Users_entity_1.Users.findOne({
            where: {
                email: email
            }
        });
    }
    async findByUserNameOrEmail(username, email) {
        return Users_entity_1.Users.findOne({
            where: {
                [sequelize_1.Op.or]: [
                    { userName: username },
                    { email: email }
                ]
            }
        });
    }
    async findByUserNameAndEmail(username, email) {
        return Users_entity_1.Users.findOne({
            where: {
                userName: username,
                email: email
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map