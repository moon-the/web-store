import { Model } from 'sequelize-typescript';
import { Users } from './Users.entity';
import { MetaData } from './metadata.entity';
export declare class Token extends Model {
    id: number;
    refreshToken: string;
    idUser: number;
    user: Users;
    idMetaData: number;
    metaData: MetaData;
}
