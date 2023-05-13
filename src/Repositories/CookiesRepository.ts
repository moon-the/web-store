import { Cookies } from "src/models/Cookies.entity";
import { BaseRepository } from "./BaseRepository";

export class CookiesRepository extends BaseRepository<Cookies> {
    constructor() {
        super(Cookies);
    }
}