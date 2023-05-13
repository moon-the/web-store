import { Tags } from "src/models/Tags.entity";
import { BaseRepository } from "./BaseRepository";

export class TagsRepository extends BaseRepository<Tags> {
    constructor() {
        super(Tags);
    }
}