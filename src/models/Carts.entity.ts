import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { ProductsCarts } from './ProductsCarts.entity';
import { ShippingBusiness } from './ShippingBusiness.entity';
import { ShippingBusinessCarts } from './ShippingBusinessCarts.entity';
import { Users } from './Users.entity';

@Table
export class Carts extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @BelongsToMany(() => Products, () => ProductsCarts)
    products: Products[];

    @BelongsToMany(() => ShippingBusiness, () => ShippingBusinessCarts)
    shippingBusiness: ShippingBusiness[];

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;
}