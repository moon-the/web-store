import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, HasMany, HasOne, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany, Default } from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
<<<<<<< HEAD:apps/authentication/src/Models/Users.entity.ts
import { Profile } from './Profiles.entity';
=======
import { Profile } from './profiles.entity';
<<<<<<< HEAD
import { Token } from './token.entity';
=======
>>>>>>> main:src/models/users.entity.ts
import { Token } from './Tokens.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Roles } from './Roles.entity';

@Table
export class Users extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @AllowNull(false)
    @Column
    userName: string;

    @Length({min: 8})
    @AllowNull(false)
    @Column
    password: string;

    @Unique
    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    @Default(false)
    activated: boolean;

    @AllowNull(false)
    @Column
    keyActivated: string;

    @Column
    keyForgetPassword: string;

    @AllowNull(false)
    @Column
    open2FA: boolean;

    @AllowNull(false)
    @Column
    key2FA: string;


    @HasOne(()=> Profile)
    profile: Profile;


    @HasMany(()=> Token)
    token: Token[];

    @HasMany(()=> OldToken)
    oldToken: OldToken[];


    @AllowNull(true)
    @ForeignKey(()=> Roles)
    @Column
    idRole: number;

    @BelongsTo(()=> Roles)
    role: Roles;

}