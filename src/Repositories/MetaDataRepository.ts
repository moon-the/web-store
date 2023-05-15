import { MetaData } from "src/models/MetaData.entity";
import { BaseRepository } from "./BaseRepository";

export class MetaDataRepository extends BaseRepository<MetaData> {
    constructor() {
        super(MetaData);
    }
}