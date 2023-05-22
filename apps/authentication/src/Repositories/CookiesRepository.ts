import { BaseRepository } from "@app/common/Repositories/BaseRepository";
import { Cookies } from "../Models/Cookies.entity";

export class CookiesRepository extends BaseRepository<Cookies> {
    constructor() {
        super(Cookies);
    }
}