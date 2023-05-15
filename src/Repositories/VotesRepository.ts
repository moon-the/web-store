import { BaseRepository } from "./BaseRepository";
import { Votes } from "src/models/Votes.entity";

export class VotesRepository extends BaseRepository<Votes> {
    constructor() {
        super(Votes);
    }

}