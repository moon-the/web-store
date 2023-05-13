import { Table, Column, Model, PrimaryKey, Unique, AllowNull, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { ShopsProducts } from './ShopsProducts.entity';
import { Carts } from './Carts.entity';
import { ShippingBusinessCarts } from './ShippingBusinessCarts.entity';

@Table
export class ShippingBusiness extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    name: string;

    
    @BelongsToMany(() => Carts, () => ShippingBusinessCarts)
    cart: Carts[];

    
}