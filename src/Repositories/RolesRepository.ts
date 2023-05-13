import { Roles } from "src/models/Roles.entity";
import { BaseRepository } from "./BaseRepository";

export class RolesRepository extends BaseRepository<Roles> {
    constructor() {
        super(Roles);
    }
}