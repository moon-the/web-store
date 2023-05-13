import { ProductsTags } from "src/models/ProductsTags.entity";
import { BaseRepository } from "./BaseRepository";

export class ProductsTagsRepository extends BaseRepository<ProductsTags> {
    constructor() {
        super(ProductsTags);
    }
}