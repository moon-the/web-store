import { Transports } from "src/models/Transports.entity";
import { BaseRepository } from "./BaseRepository";

export class TransportsRepository extends BaseRepository<Transports> {
    constructor() {
        super(Transports);
    }
}