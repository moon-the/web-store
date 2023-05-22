import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Votes } from './votes.entity';

@Table
export class Configs extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    language: string;

    @AllowNull(false)
    @Column
    display: string;

<<<<<<< HEAD
=======
    @Column
    publicKey: string;

>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
}