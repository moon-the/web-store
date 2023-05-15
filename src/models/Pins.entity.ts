import { Table, Column, Model, PrimaryKey, Unique, AllowNull, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { PinsProducts } from './PinsProducts.entity';

@Table
export class Pins extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    name: string;

    @BelongsToMany(() => Products, () => PinsProducts)
    products: Products[];

}