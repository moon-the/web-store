import { HomeShopsProducts } from "src/models/HomeShopProducts.entity";
import { BaseRepository } from "./BaseRepository";

export class HomeShopsProductsRepository extends BaseRepository<HomeShopsProducts> {
    constructor() {
        super(HomeShopsProducts);
    }
}