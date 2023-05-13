import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, HasMany, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Users } from './Users.entity';
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