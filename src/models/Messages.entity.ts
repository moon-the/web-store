import { Table, Column, Model, PrimaryKey, AllowNull, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Rooms } from './Rooms.entity';
import { Participates } from './Participates.entity';

@Table
export class Messages extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    message: string;

    @AllowNull(false)
    @Column
    type: string;

    @ForeignKey(()=> Messages)
    @Column
    idMessage: number;

    @BelongsTo(()=> Messages)
    mess: Messages;

    @ForeignKey(()=> Rooms)
    @Column
    idRoom: number;

    @BelongsTo(()=> Rooms)
    room: Rooms;

    @ForeignKey(()=> Participates)
    @Column
    idParticipates: number;

    @BelongsTo(()=> Participates)
    participate: Participates;
}