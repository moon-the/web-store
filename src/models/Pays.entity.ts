import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Bills } from './Bills.entity';

@Table
export class Pays extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    numberCard: string;

    @AllowNull(false)
    @Column
    cvv: string;

    @HasMany(()=> Bills)
    bills: Bills[];

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;



}