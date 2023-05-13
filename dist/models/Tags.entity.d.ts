import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Tags extends Model {
    id: number;
    name: string;
    products: Products[];
}
