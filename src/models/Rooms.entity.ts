import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, AutoIncrement, HasOne, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Messages } from './Messages.entity';
import { Users } from './users.entity';
import { Participates } from './Participates.entity';

@Table
export class Rooms extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;


    @HasMany(()=> Messages)
    message: Messages[];

    @BelongsToMany(() => Users, () => Participates)
    users: Users[];
}