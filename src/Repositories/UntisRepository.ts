import { Untis } from "src/models/Untis.entity";
import { BaseRepository } from "./BaseRepository";

export class UntisRepository extends BaseRepository<Untis> {
    constructor() {
        super(Untis);
    }

}