import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { MetaData } from './metadata.entity';
import { Products } from './Products.entity';
import { CategorysProducts } from './categorysProducts.entity';
import { Intros } from './Intros.entity';
import { Tags } from './Tags.entity';

@Table
export class ProductsTags extends Model {
    @ForeignKey(() => Tags)
    @Column
    idTag: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;
}