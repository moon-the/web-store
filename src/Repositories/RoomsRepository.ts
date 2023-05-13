import { Rooms } from "src/models/Rooms.entity";
import { BaseRepository } from "./BaseRepository";

export class RoomsRepository extends BaseRepository<Rooms> {
    constructor() {
        super(Rooms);
    }
}