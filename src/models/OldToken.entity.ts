import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
<<<<<<< HEAD
import { Users } from './users.entity';
=======
import { Users } from './Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { MetaData } from './metadata.entity';

@Table
export class OldToken extends Model {
   
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    refreshToken: string;

    @ForeignKey(()=> Users)
    @Column
    idUser: number;

    @BelongsTo(()=> Users)
    user: Users;

    @ForeignKey(()=> MetaData)
    @Column
    idMetaData: number;

    @BelongsTo(()=> MetaData)
    metaData: MetaData;

}