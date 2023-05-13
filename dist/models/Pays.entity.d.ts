import { Model } from 'sequelize-typescript';
import { Users } from './Users.entity';
import { Bills } from './Bills.entity';
export declare class Pays extends Model {
    id: number;
    numberCard: string;
    cvv: string;
    bills: Bills[];
    idUser: number;
    user: Users;
}
