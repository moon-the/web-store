import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/Repositories/UserRepository';
import { AuthService } from 'src/Services/Auth.service';
import { AuthController } from '../auth/Auth.controller';


@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService]
})
export class AuthModule {}
