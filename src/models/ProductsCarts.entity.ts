import { Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Carts } from './Carts.entity';
import { Sales } from './Sales.entity';

@Table
export class ProductsCarts extends Model {
    @ForeignKey(() => Products)
    @Column
    idProduct: number;
    
    @ForeignKey(() => Carts)
    @Column
    idCart: number;

    @ForeignKey(()=> Sales)
    @Column
    idSale: number;

    @BelongsTo(()=> Sales)
    sale: Sales;


}