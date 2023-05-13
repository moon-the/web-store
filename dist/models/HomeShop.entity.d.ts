import { Model } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { Products } from './Products.entity';
export declare class HomeShops extends Model {
    id: number;
    idShop: number;
    shop: Shops;
    products: Products[];
}
