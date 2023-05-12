import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Pins } from './Pins.entity';

@Table
export class PinsProducts extends Model {
    @ForeignKey(() => Pins)
    @Column
    idPin: number;
    
    @ForeignKey(() => Products)
    @Column
    idproduct: number;

}