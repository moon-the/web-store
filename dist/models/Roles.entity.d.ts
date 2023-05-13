import { Model } from 'sequelize-typescript';
import { Users } from './Users.entity';
export declare class Roles extends Model {
    id: number;
    name: string;
    data: string;
    users: Users[];
}
