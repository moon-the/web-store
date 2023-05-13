import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { ShippingBusiness } from './ShippingBusiness.entity';
import { Users } from './Users.entity';
export declare class Carts extends Model {
    id: number;
    products: Products[];
    shippingBusiness: ShippingBusiness[];
    idUser: number;
    user: Users;
}
