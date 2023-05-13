import { Shops } from "src/models/Shops.enity";
import { BaseRepository } from "./BaseRepository";

export class ShopsRepository extends BaseRepository<Shops> {
    constructor() {
        super(Shops);
    }
}