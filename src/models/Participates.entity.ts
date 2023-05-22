import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement, HasMany } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
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