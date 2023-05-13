import { ProductsFiles } from "src/models/ProductsFiles.entity";
import { BaseRepository } from "./BaseRepository";

export class ProductsFilesRepository extends BaseRepository<ProductsFiles> {
    constructor() {
        super(ProductsFiles);
    }
}