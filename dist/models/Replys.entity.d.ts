import { Model } from 'sequelize-typescript';
import { Comments } from './comments.entity';
import { Shops } from './Shops.enity';
export declare class Replys extends Model {
    id: number;
    message: string;
    idComment: number;
    comment: Comments;
    idShop: number;
    shop: Shops;
}
