import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Services/Auth.service';
import { AuthAPI } from '../auth/Auth.api';

@Module({
  controllers: [AuthAPI],
  providers: [AuthService, JwtService]
})
export class AuthAPIModule {}
