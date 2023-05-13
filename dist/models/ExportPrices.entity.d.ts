import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class ExportPrices extends Model {
    id: number;
    price: number;
    idProduct: number;
    product: Products;
}
