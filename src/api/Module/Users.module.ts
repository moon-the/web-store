import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersAPI } from '../Users.api';
import { UserService } from 'src/Services/UserService';


@Module({
  controllers: [UsersAPI],
  providers: [UserService]
})
export class UsersAPIModule {}
