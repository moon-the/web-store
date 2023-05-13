import { Model } from 'sequelize-typescript';
import { Sales } from './Sales.entity';
export declare class ProductsCarts extends Model {
    idProduct: number;
    idCart: number;
    idSale: number;
    sale: Sales;
}
