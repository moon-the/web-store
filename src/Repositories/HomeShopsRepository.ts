import { HomeShops } from "src/models/HomeShop.entity";
import { BaseRepository } from "./BaseRepository";

export class HomeShopsRepository extends BaseRepository<HomeShops> {
    constructor() {
        super(HomeShops);
    }
}