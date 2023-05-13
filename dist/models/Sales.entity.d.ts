import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Sales extends Model {
    id: number;
    sale: number;
    state: boolean;
    idProduct: number;
    product: Products;
}
