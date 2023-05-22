import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, HasOne } from 'sequelize-typescript';
<<<<<<< HEAD:apps/authentication/src/Models/MetaData.entity.ts
=======
<<<<<<< HEAD
import { Users } from './users.entity';
import { Token } from './token.entity';
=======
import { Users } from './Users.entity';
>>>>>>> main:src/models/MetaData.entity.ts
import { Token } from './Tokens.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
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