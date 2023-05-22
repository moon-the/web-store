import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Products } from './Products.entity';

@Table
export class Sales extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    sale: number;

    @Unique
    @AllowNull(false)
    @Column
    state: boolean;

    @ForeignKey(()=> Products)
    @Column
    idProduct: number;

    @BelongsTo(()=> Products)
    product: Products;

}