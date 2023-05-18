import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Profile } from "../Models/Profiles.entity";


export class ProfileRepository extends BaseRepository<Profile> {
    constructor() {
        super(Profile);
    }
}