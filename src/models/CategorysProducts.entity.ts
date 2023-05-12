import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, HasMany, HasOne, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Categorys } from './Categorys.entity';

@Table
export class CategorysProducts extends Model {
    @ForeignKey(() => Categorys)
    @Column
    idCategory: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
}