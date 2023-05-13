import { Profile } from "src/models/profiles.entity";
import { BaseRepository } from "./BaseRepository";

export class ProfileRepository extends BaseRepository<Profile> {
    constructor() {
        super(Profile);
    }
}