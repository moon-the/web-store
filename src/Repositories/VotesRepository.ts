import { BaseRepository } from "./BaseRepository";
import { Votes } from "src/models/votes.entity";

export class VotesRepository extends BaseRepository<Votes> {
    constructor() {
        super(Votes);
    }

}