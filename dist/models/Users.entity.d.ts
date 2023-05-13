import { Model } from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
import { Profile } from './profiles.entity';
import { Token } from './Tokens.entity';
import { Roles } from './Roles.entity';
import { Pays } from './Pays.entity';
import { Rooms } from './Rooms.entity';
import { Carts } from './Carts.entity';
export declare class Users extends Model {
    id: number;
    userName: string;
    password: string;
    email: string;
    activated: boolean;
    profile: Profile;
    token: Token[];
    oldToken: OldToken[];
    cart: Carts[];
    idRole: number;
    role: Roles;
    pays: Pays[];
    rooms: Rooms[];
}
