import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
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