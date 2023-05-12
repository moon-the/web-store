import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, HasOne } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Categorys } from './Categorys.entity';


@Table
export class Intros extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    title: string;

    @AllowNull(false)
    @Column
    describe: string;

    @HasOne(()=> Products)
    product: Products;

    @HasOne(()=> Categorys)
    category: Categorys;

  
}