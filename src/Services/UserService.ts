import { Injectable, Inject } from '@nestjs/common';
import { Users } from 'src/models/users.entity';
import { UserRepository } from '../Repositories/UserRepository';

@Injectable()
export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
}
