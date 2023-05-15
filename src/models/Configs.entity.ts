import { Table, Column, Model, PrimaryKey, AllowNull, AutoIncrement } from 'sequelize-typescript';


@Table
export class Configs extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    language: string;

    @AllowNull(false)
    @Column
    display: string;

    @Column
    publicKey: string;

}