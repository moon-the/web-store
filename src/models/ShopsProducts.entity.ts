import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { Products } from './Products.entity';

@Table
export class ShopsProducts extends Model {
    @ForeignKey(() => Shops)
    @Column
    idShop: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
}