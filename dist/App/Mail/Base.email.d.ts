import { ConfigService } from '@nestjs/config';
export declare abstract class EmailBase {
    private config;
    private oAuth2Client;
    constructor(config: ConfigService);
    protected email: string;
    protected subject: string;
    protected html: any;
    sendEmail(): Promise<any>;
}
