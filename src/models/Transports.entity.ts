import { Table, Column, Model, PrimaryKey, AllowNull, AutoIncrement} from 'sequelize-typescript';

@Table
export class Transports extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


    @AllowNull(false)
    @Column
    type: string;

    
    
}