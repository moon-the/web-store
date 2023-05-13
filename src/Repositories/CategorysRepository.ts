import { Categorys } from "src/models/Categorys.entity";
import { BaseRepository } from "./BaseRepository";

export class CategorysRepository extends BaseRepository<Categorys> {
    constructor() {
        super(Categorys);
    }
}