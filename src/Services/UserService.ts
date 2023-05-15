import { Injectable, Inject } from '@nestjs/common';
import { Users } from 'src/models/Users.entity';
import { UserRepository } from '../Repositories/UserRepository';

@Injectable()
export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAll(): Promise<Users[]> {
        return await this.userRepository.getAll();
    }

    public async findById(idUser: number): Promise<Users> {
        return await this.userRepository.findById(idUser);
    }
    
    public async update(user: Users): Promise<Users> {
        return await this.userRepository.update(user);
    }

    public async delete(user: Users): Promise<void> {
        return await this.userRepository.delete(user);
    }
}
