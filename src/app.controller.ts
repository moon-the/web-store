import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './Services/UserService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    // this.userService.find();
    // return this.appService.getHello();
    return "hello";
  }
}
