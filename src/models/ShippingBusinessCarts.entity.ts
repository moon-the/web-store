import { Table, Column, Model, ForeignKey, AllowNull } from 'sequelize-typescript';
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