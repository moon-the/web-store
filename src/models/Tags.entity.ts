import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { MetaData } from './metadata.entity';
import { Products } from './Products.entity';
import { CategorysProducts } from './categorysProducts.entity';
import { Intros } from './Intros.entity';
import { ProductsTags } from './ProductsTags.entity';

@Table
export class Tags extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @BelongsToMany(() => Products, () => ProductsTags)
    products: Products[];

}