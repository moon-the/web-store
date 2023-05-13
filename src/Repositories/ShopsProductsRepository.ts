import { ShopsProducts } from "src/models/ShopsProducts.entity";
import { BaseRepository } from "./BaseRepository";

export class ShopsProductsRepository extends BaseRepository<ShopsProducts> {
    constructor() {
        super(ShopsProducts);
    }
}