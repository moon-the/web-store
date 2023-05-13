import { Model } from 'sequelize-typescript';
import { Messages } from './Messages.entity';
export declare class Participates extends Model {
    idUsers: number;
    idRooms: number;
    message: Messages[];
}
