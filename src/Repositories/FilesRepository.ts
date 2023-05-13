import { Files } from "src/models/Files.entity";
import { BaseRepository } from "./BaseRepository";

export class FilesRepository extends BaseRepository<Files> {
    constructor() {
        super(Files);
    }
}