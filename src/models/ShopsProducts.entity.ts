import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, HasMany, HasOne, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
import { Profile } from './profiles.entity';
<<<<<<< HEAD
import { Token } from './token.entity';
=======
import { Token } from './Tokens.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Roles } from './Roles.entity';
import { Pays } from './Pays.entity';
import { Shops } from './Shops.enity';
import { Products } from './Products.entity';

@Table
export class ShopsProducts extends Model {
    @ForeignKey(() => Shops)
    @Column
    idShop: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
}