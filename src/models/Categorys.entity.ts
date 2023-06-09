import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { MetaData } from './metadata.entity';
import { Products } from './Products.entity';
import { CategorysProducts } from './categorysProducts.entity';
import { Intros } from './Intros.entity';

@Table
export class Categorys extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @BelongsToMany(() => Products, () => CategorysProducts)
    products: Products[];

    @ForeignKey(()=> Intros)
    @Column
    idIntro: number;

    @BelongsTo(()=> Intros)
    intro: Intros;
}