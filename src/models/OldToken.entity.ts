import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Users } from './Users.entity';
import { MetaData } from './MetaData.entity';

@Table
export class OldToken extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    refreshToken: string;

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;

    @ForeignKey(()=> MetaData)
    @Column
    idMetaData: number;

    @BelongsTo(()=> MetaData)
    metaData: MetaData;

}