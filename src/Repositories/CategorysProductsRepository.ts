import { CategorysProducts } from "src/models/categorysProducts.entity";
import { BaseRepository } from "./BaseRepository";

export class CategorysProductsRepository extends BaseRepository<CategorysProducts> {
    constructor() {
        super(CategorysProducts);
    }
}