import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
export declare class Files extends Model {
    id: number;
    path: string;
    fileName: string;
    type: string;
    has: string;
    products: Products[];
}
