import { Profile } from "src/models/Profiles.entity";
import { BaseRepository } from "./BaseRepository";

export class ProfileRepository extends BaseRepository<Profile> {
    constructor() {
        super(Profile);
    }
}