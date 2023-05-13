import { Participates } from "src/models/Participates.entity";
import { BaseRepository } from "./BaseRepository";

export class ParticipatesRepository extends BaseRepository<Participates> {
    constructor() {
        super(Participates);
    }
}