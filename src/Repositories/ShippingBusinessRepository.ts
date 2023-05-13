import { ShippingBusiness } from "src/models/ShippingBusiness.entity";
import { BaseRepository } from "./BaseRepository";

export class ShippingBusinessRepository extends BaseRepository<ShippingBusiness> {
    constructor() {
        super(ShippingBusiness);
    }
}