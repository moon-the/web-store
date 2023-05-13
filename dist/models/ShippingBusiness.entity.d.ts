import { Model } from 'sequelize-typescript';
import { Carts } from './Carts.entity';
export declare class ShippingBusiness extends Model {
    id: number;
    name: string;
    cart: Carts[];
}
