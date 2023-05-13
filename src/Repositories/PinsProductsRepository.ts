import { PinsProducts } from "src/models/PinsProducts.entity";
import { BaseRepository } from "./BaseRepository";

export class PinsProductsRepository extends BaseRepository<PinsProducts> {
    constructor() {
        super(PinsProducts);
    }
}