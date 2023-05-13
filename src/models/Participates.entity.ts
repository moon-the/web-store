import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Users } from './users.entity';
import { MetaData } from './metadata.entity';
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