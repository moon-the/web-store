import { Model } from "sequelize-typescript";
import { IRepository } from "./IRepository";

export abstract class BaseRepository<M extends Model> implements IRepository {
    constructor(protected model: typeof Model) { }

    public async findById(id: number): Promise<M> {
        //@ts-ignore
        return this.model.findByPk(id);
    }

    public async getAll(): Promise<M[]> {
        // @ts-ignore
        return this.model.findAll();
    }

    async deleteById(id: number) {
        //@ts-ignore
        const model = await this.model.findByPk(id);
        return model.destroy();
    }

    async delete(model: M) {
        //@ts-ignore
        return model.destroy();
    }

    save(type: any):Promise<M> {
       return type.save();
    }

    update(model: M) {
        return model.save();
    }
}
