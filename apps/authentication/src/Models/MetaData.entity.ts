import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne } from 'sequelize-typescript';
import { Token } from './Tokens.entity';
import { OldToken } from './OldToken.entity';
import { Cookies } from './Cookies.entity';

@Table
export class MetaData extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @HasMany(()=> OldToken)
    oldToken: OldToken[];

    @HasMany(()=> Token)
    token: Token[];

    @HasOne(()=> Cookies)
    cookies: Cookies[];

}