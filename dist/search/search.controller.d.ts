import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { Response } from 'express';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    create(createSearchDto: CreateSearchDto): string;
    findOne(key: string, res: Response): string | Response<any, Record<string, any>> | import("express-serve-static-core").Send<any, Response<any, Record<string, any>>>;
}
