import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Files } from './Files.entity';
import { Products } from './Products.entity';

@Table
export class ProductsFiles extends Model {
    @ForeignKey(() => Files)
    @Column
    idFile: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
}