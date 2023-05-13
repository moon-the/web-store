import { Model } from 'sequelize-typescript';
export declare class Configs extends Model {
    id: number;
    language: string;
    display: string;
    publicKey: string;
}
