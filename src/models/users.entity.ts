import { Table, Column, Model, PrimaryKey, Unique, AllowNull, Length, HasMany, HasOne, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
import { Profile } from './profiles.entity';
import { Token } from './Tokens.entity';
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