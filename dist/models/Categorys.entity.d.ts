import { Model } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Intros } from './Intros.entity';
export declare class Categorys extends Model {
    id: number;
    name: string;
    products: Products[];
    idIntro: number;
    intro: Intros;
}
