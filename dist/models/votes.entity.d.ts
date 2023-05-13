import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Votes extends Model {
    id: number;
    start: number;
    idProduct: number;
    product: Products;
}
