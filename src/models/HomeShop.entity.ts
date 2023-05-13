import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { Products } from './Products.entity';
import { HomeShopsProducts } from './HomeShopProducts.entity';


@Table
export class HomeShops extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(()=> Shops)
    @Column
    idShop: number;

    @BelongsTo(()=> Shops)
    shop: Shops;

    @BelongsToMany(() => Products, () => HomeShopsProducts)
    products: Products[];
}