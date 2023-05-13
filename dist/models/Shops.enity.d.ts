import { Model } from 'sequelize-typescript';
import { Users } from './Users.entity';
import { HomeShops } from './HomeShop.entity';
import { Products } from './Products.entity';
export declare class Shops extends Model {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    idUser: number;
    user: Users;
    homeShops: HomeShops[];
    products: Products[];
}
