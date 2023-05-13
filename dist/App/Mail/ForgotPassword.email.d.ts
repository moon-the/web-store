import { ConfigService } from "@nestjs/config";
import { EmailBase } from "./Base.email";
export declare class ForgotPassword extends EmailBase {
    constructor(config: ConfigService);
    create(email: string, link: string): Promise<void>;
}
