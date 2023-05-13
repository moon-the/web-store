import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Users } from './users.entity';
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