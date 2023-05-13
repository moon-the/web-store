import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Products } from './Products.entity';

@Table
export class ImportPrices extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    price: number;

    @ForeignKey(()=> Products)
    @Column
    idProduct: number;

    @BelongsTo(()=> Products)
    product: Products;

}