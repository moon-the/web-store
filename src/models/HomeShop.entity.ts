<<<<<<< HEAD
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
=======
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { Products } from './Products.entity';
import { HomeShopsProducts } from './HomeShopProducts.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826


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

<<<<<<< HEAD
=======
    @BelongsToMany(() => Products, () => HomeShopsProducts)
    products: Products[];
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
}