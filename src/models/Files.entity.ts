import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { ProductsFiles } from './ProductsFiles.entity';
import { Products } from './Products.entity';

@Table
export class Files extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    path: string;

    @AllowNull(false)
    @Column
    fileName: string;

    @AllowNull(false)
    @Column
    type: string;

    @AllowNull(false)
    @Column
    has: string;

    @BelongsToMany(() => Files, () => ProductsFiles)
    products: Products[];
}