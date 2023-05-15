import { Table, Column, Model, PrimaryKey, Unique, AllowNull, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
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