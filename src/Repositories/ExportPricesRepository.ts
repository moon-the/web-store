import { ExportPrices } from "src/models/ExportPrices.entity";
import { BaseRepository } from "./BaseRepository";

export class ExportPricesRepository extends BaseRepository<ExportPrices> {
    constructor() {
        super(ExportPrices);
    }
}