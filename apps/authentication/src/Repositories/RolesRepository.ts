import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Roles } from "../Models/Roles.entity";

export class RolesRepository extends BaseRepository<Roles> {
    constructor() {
        super(Roles);
    }
}