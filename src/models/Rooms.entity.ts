import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Messages } from './Messages.entity';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Participates } from './Participates.entity';

@Table
export class Rooms extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;


    @HasMany(()=> Messages)
    message: Messages[];

    @BelongsToMany(() => Users, () => Participates)
    users: Users[];
}