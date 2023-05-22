import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826

@Table
export class Profile extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    fullName: string;

    @Column
    address: string;

    @Column
    avatar: string;

    @Column
    phoneNumber: string;

    @AllowNull(false)
    @Column
    gender: string;

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;

}