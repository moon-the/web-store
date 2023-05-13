import { Model } from 'sequelize-typescript';
import { Messages } from './Messages.entity';
import { Users } from './Users.entity';
export declare class Rooms extends Model {
    id: number;
    name: string;
    message: Messages[];
    users: Users[];
}
