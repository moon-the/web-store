import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from '../Services/authentication.service';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtService]
})
export class AuthModule {}
