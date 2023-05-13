import { Products } from "src/models/Products.entity";
import { BaseRepository } from "./BaseRepository";

export class ProductsRepository extends BaseRepository<Products> {
    constructor() {
        super(Products);
    }
}