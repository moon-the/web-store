import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany, BelongsTo } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { HomeShops } from './HomeShop.entity';
import { Products } from './Products.entity';
import { ShopsProducts } from './ShopsProducts.entity';

@Table
export class Shops extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    address: string;

    @AllowNull(false)
    @Column
    phoneNumber: string;

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;

    @HasMany(()=> HomeShops)
    homeShops: HomeShops[];
    
    @BelongsToMany(() => Products, () => ShopsProducts)
    products: Products[];


    
}