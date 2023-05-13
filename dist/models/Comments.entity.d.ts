import { Model } from 'sequelize-typescript';
import { Votes } from './votes.entity';
export declare class Comments extends Model {
    id: number;
    message: string;
    idComment: number;
    comment: Comments;
    idvote: number;
    vote: Votes;
}
