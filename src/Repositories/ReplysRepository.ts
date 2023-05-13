import { Replys } from "src/models/Replys.entity";
import { BaseRepository } from "./BaseRepository";

export class ReplysRepository extends BaseRepository<Replys> {
    constructor() {
        super(Replys);
    }
}