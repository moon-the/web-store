import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import { HomeShops } from './HomeShop.entity';
import { Products } from './Products.entity';
import { ShopsProducts } from './ShopsProducts.entity';

@Table
export class Transports extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    type: string;

    
    
}