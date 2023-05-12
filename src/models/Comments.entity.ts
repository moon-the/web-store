import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Products } from './Products.entity';
import { Votes } from './votes.entity';

@Table
export class Comments extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    message: string;

    @ForeignKey(()=> Comments)
    @Column
    idComment: number;

    @BelongsTo(()=> Comments)
    comment: Comments;

    @ForeignKey(()=> Votes)
    @Column
    idvote: number;

    @BelongsTo(()=> Votes)
    vote: Votes;



}