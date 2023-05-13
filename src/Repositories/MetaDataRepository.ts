import { MetaData } from "src/models/metadata.entity";
import { BaseRepository } from "./BaseRepository";

export class MetaDataRepository extends BaseRepository<MetaData> {
    constructor() {
        super(MetaData);
    }
}