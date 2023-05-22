import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { UserRepository } from '../Repositories/UserRepository';
import { Users } from '../Models/Users.entity';

@Injectable()
export class RolesService {
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

    public async delete(id: number) {
        let user = await this.findById(id);
        if(user) {

        }
        throw new NotFoundException("Tài Khoản Không Tồn Tại");
    }
}
