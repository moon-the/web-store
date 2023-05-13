import { Model } from "sequelize-typescript";
import { IRepository } from "./IRepository";
export declare abstract class BaseRepository<M extends Model> implements IRepository {
    protected model: typeof Model;
    constructor(model: typeof Model);
    findById(id: number): Promise<M>;
    getAll(): Promise<M[]>;
    deleteById(id: number): Promise<void>;
    save(type: any): Promise<M>;
    update(model: M): Promise<M>;
}
