import { AppService } from './app.service';
import { UserService } from './Services/UserService';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
}
