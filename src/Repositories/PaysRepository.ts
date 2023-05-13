import { Pays } from "src/models/Pays.entity";
import { BaseRepository } from "./BaseRepository";

export class PaysRepository extends BaseRepository<Pays> {
    constructor() {
        super(Pays);
    }
}