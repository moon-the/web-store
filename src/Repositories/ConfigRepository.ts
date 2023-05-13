import { BaseRepository } from "./BaseRepository";
import { Configs } from "src/models/Configs.entity";

export class ConfigRepository extends BaseRepository<Configs> {
    constructor() {
        super(Configs);
    }
}