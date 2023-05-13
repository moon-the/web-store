import { Model } from 'sequelize-typescript';
import { Token } from './Tokens.entity';
import { OldToken } from './OldToken.entity';
import { Cookies } from './Cookies.entity';
export declare class MetaData extends Model {
    id: number;
    oldToken: OldToken[];
    token: Token[];
    cookies: Cookies[];
}
