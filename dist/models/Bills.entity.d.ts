import { Model } from 'sequelize-typescript';
import { Carts } from './Carts.entity';
import { Pays } from './Pays.entity';
export declare class Bills extends Model {
    id: number;
    idCart: number;
    cart: Carts;
    idPay: number;
    pay: Pays;
}
