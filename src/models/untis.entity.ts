import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import { HomeShops } from './HomeShop.entity';
import { Products } from './Products.entity';
import { ShopsProducts } from './ShopsProducts.entity';

@Table
export class Untis extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    type: string;

    @AllowNull(false)
    @Column
    change: number;

    @HasMany(()=> Products)
    products: Products[];
    
    
}