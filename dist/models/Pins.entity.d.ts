import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Pins extends Model {
    id: number;
    name: string;
    products: Products[];
}
