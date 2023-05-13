/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
export declare class FileController {
    private config;
    constructor(config: ConfigService);
    upload(file: Express.Multer.File): void;
    test(): void;
}
