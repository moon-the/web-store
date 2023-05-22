import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../Repositories/UserRepository';
import { Users } from '../Models/Users.entity';
import { UserRegisterDTO } from '@app/common/Authentication/UserRegisterDTO';

@Injectable()
export class UsersService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAll(): Promise<Users[]> {
        return await this.userRepository.getAll();
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

    public async findByUserNameOrEmail(username: string, email: string): Promise<Users> {
        return this.userRepository.findByUserNameOrEmail(username, email);
    }

    public async findByEmail(email: string): Promise<Users> {
        return this.userRepository.findByEmail(email);
    }

    public async findByUserName(username: string): Promise<Users> {
        return this.userRepository.findByUserName(username);
    }

    public async findById(id: number): Promise<Users> {
        return this.userRepository.findById(id);
    }

}
