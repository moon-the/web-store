import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Products } from './Products.entity';
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