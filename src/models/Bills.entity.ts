import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Carts } from './Carts.entity';
import { Pays } from './Pays.entity';

@Table
export class Bills extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(()=> Carts)
    @Column
    idCart: number;

    @BelongsTo(()=> Carts)
    cart: Carts;

    @ForeignKey(()=> Pays)
    @Column
    idPay: number;

    @BelongsTo(()=> Pays)
    pay: Pays;
}