import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Users } from './Users.entity';

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