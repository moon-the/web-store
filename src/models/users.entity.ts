import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, HasMany, HasOne, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
import { Profile } from './profiles.entity';
<<<<<<< HEAD
import { Token } from './token.entity';
=======
import { Token } from './Tokens.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Roles } from './Roles.entity';
import { Pays } from './Pays.entity';
import { Rooms } from './Rooms.entity';
import { Participates } from './Participates.entity';
import { Carts } from './Carts.entity';

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

    @HasMany(()=> Carts)
    cart: Carts[];

    @AllowNull(true)
    @ForeignKey(()=> Roles)
    @Column
    idRole: number;

    @BelongsTo(()=> Roles)
    role: Roles;

    @HasMany(()=> Pays)
    pays: Pays[];

    @BelongsToMany(() => Rooms, () => Participates)
    rooms: Rooms[];
}