import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, HasMany } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826

@Table
export class Roles extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    data: string;

    @HasMany(()=> Users)
    users: Users[];
}