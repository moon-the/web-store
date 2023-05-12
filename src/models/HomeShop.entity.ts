import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Shops } from './Shops.enity';


@Table
export class HomeShops extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(()=> Shops)
    @Column
    idShop: number;

    @BelongsTo(()=> Shops)
    shop: Shops;

}