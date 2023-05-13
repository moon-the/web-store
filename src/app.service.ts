import { Injectable } from '@nestjs/common';
// import { IRepository } from './models/IRepository';
import { UserRepository } from './Repositories/UserRepository';

@Injectable()
export class AppService {
  getHello(): string {
    //UserRepository.findOneById(1);
    return "hello";
  }
}
