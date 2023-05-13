import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
export declare const databaseProviders: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<Sequelize>;
}[];
