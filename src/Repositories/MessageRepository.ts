import { Messages } from "src/models/Messages.entity";
import { BaseRepository } from "./BaseRepository";

export class MessageRepository extends BaseRepository<Messages> {
    constructor() {
        super(Messages);
    }
}