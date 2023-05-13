import { Pins } from "src/models/Pins.entity";
import { BaseRepository } from "./BaseRepository";

export class PinsRepository extends BaseRepository<Pins> {
    constructor() {
        super(Pins);
    }
}