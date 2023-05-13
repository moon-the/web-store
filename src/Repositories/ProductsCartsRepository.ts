import { ProductsCarts } from "src/models/ProductsCarts.entity";
import { BaseRepository } from "./BaseRepository";

export class ProductsCartsRepository extends BaseRepository<ProductsCarts> {
    constructor() {
        super(ProductsCarts);
    }
}