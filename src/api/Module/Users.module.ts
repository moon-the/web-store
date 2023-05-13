import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Services/Auth.service';
import { UsersAPI } from '../Users.api';


@Module({
  controllers: [UsersAPI],
  providers: [AuthService, JwtService]
})
export class UsersAPIModule {}
