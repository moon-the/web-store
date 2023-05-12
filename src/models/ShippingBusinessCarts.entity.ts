import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany, AllowNull } from 'sequelize-typescript';
import { MetaData } from './metadata.entity';
import { Products } from './Products.entity';
import { CategorysProducts } from './categorysProducts.entity';
import { Intros } from './Intros.entity';
import { Tags } from './Tags.entity';
import { Carts } from './Carts.entity';
import { ShippingBusiness } from './ShippingBusiness.entity';

@Table
export class ShippingBusinessCarts extends Model {
    @ForeignKey(() => Carts)
    @Column
    idCart: number;
    
    @ForeignKey(() => ShippingBusiness)
    @Column
    idShippingBusiness: number;

    @AllowNull(false)
    @Column
    state: boolean;
}