import { CACHE_MANAGER } from "@nestjs/cache-manager";
import {Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";


@Injectable()
export class TestService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
   
    }

    async get(): Promise<string> {
        let id = await this.cacheManager.get('name');
        console.log("id = " + id);
        return await this.cacheManager.get('name');
    }

    async set() {
        await this.cacheManager.set('hello', "manhhung")
    }
    
}