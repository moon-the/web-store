import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Categorys } from './Categorys.entity';
export declare class Intros extends Model {
    id: number;
    title: string;
    describe: string;
    product: Products;
    category: Categorys;
}
