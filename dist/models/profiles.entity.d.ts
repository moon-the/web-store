import { Model } from 'sequelize-typescript';
import { Users } from './Users.entity';
export declare class Profile extends Model {
    id: number;
    fullName: string;
    address: string;
    avatar: string;
    phoneNumber: string;
    gender: string;
    idUser: number;
    user: Users;
}
