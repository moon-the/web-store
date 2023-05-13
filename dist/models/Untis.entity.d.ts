import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Untis extends Model {
    id: number;
    type: string;
    change: number;
    products: Products[];
}
