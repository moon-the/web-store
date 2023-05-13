import { Sales } from "src/models/Sales.entity";
import { BaseRepository } from "./BaseRepository";

export class SalesRepository extends BaseRepository<Sales> {
    constructor() {
        super(Sales);
    }
}