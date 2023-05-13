import { Intros } from "src/models/Intros.entity";
import { BaseRepository } from "./BaseRepository";

export class IntrosRepository extends BaseRepository<Intros> {
    constructor() {
        super(Intros);
    }
}