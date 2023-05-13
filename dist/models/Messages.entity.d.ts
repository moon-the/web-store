import { Model } from 'sequelize-typescript';
import { Rooms } from './Rooms.entity';
import { Participates } from './Participates.entity';
export declare class Messages extends Model {
    id: number;
    message: string;
    type: string;
    idMessage: number;
    mess: Messages;
    idRoom: number;
    room: Rooms;
    idParticipates: number;
    participate: Participates;
}
