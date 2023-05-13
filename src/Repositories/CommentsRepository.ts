import { Comments } from "src/models/Comments.entity";
import { BaseRepository } from "./BaseRepository";

export class CommentsRepository extends BaseRepository<Comments> {
    constructor() {
        super(Comments);
    }
}