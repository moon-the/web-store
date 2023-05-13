import { Bills } from "src/models/Bills.entity";
import { BaseRepository } from "./BaseRepository";

export class BillsRepository extends BaseRepository<Bills> {
    constructor() {
        super(Bills);
    }
}