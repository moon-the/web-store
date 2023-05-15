import { CategorysProducts } from "src/models/CategorysProducts.entity";
import { BaseRepository } from "./BaseRepository";

export class CategorysProductsRepository extends BaseRepository<CategorysProducts> {
    constructor() {
        super(CategorysProducts);
    }
}