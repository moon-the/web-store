import { Table, Column, Model, PrimaryKey, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Products } from './Products.entity';

@Table
export class Votes extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    start: number;

    @ForeignKey(()=> Products)
    @Column
    idProduct: number;

    @BelongsTo(()=> Products)
    product: Products;



}