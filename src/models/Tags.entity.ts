import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Products } from './Products.entity';
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