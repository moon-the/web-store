import { Table, Column, Model, ForeignKey, HasMany } from 'sequelize-typescript';
import { Users } from './Users.entity';
import { Rooms } from './Rooms.entity';
import { Messages } from './Messages.entity';

@Table
export class Participates extends Model {
    @ForeignKey(() => Users)
    @Column
    idUsers: number;
    
    @ForeignKey(() => Rooms)
    @Column
    idRooms: number;

    @HasMany(()=> Messages)
    message: Messages[];
}