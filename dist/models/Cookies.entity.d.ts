import { Model } from 'sequelize-typescript';
import { MetaData } from './metadata.entity';
export declare class Cookies extends Model {
    id: number;
    cookie: string;
    idMetaData: number;
    metaData: MetaData;
}
