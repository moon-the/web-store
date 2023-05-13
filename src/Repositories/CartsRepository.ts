import { Carts } from "src/models/Carts.entity";
import { BaseRepository } from "./BaseRepository";

export class CartsRepository extends BaseRepository<Carts> {
    constructor() {
        super(Carts);
    }
}