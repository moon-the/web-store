import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Comments } from './comments.entity';
import { Shops } from './Shops.enity';

@Table
export class Replys extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    message: string;

    // @HasOne(()=> Users)
    // user: Users;

    @ForeignKey(()=> Comments)
    @Column
    idComment: number;

    @BelongsTo(()=> Comments)
    comment: Comments;

    @ForeignKey(()=> Shops)
    @Column
    idShop: number;

    @BelongsTo(()=> Shops)
    shop: Shops;
    
}