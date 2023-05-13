import { ImportPrices } from "src/models/ImportPrices.entity";
import { BaseRepository } from "./BaseRepository";

export class ImportPricesRepository extends BaseRepository<ImportPrices> {
    constructor() {
        super(ImportPrices);
    }
}