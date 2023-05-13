import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { HomeShops } from './HomeShop.entity';
import { Products } from './Products.entity';


@Table
export class HomeShopsProducts extends Model {
   
    @ForeignKey(() => HomeShops)
    @Column
    idHomeShop: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
    
}