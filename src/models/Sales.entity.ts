import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Users } from './users.entity';
import { Products } from './Products.entity';

@Table
export class Sales extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    sale: number;

    @Unique
    @AllowNull(false)
    @Column
    state: boolean;

    @ForeignKey(()=> Products)
    @Column
    idProduct: number;

    @BelongsTo(()=> Products)
    product: Products;

}