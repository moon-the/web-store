import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
import { AuthService } from 'src/Services/Auth.service';
import * as bcrypt from 'bcrypt';
import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
import { TokenDTO } from 'src/DTO/TokenDTO';
import { Request, Response } from 'express';
import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/Services/UserService';
import { AuthGuard } from '@nestjs/passport';
import { TestService } from 'src/Services/Test.service';


@Controller("/api/v1/users")
@UseGuards(AuthGuard('jwt'))
export class UsersAPI {

    constructor(private userService: UserService) {
    }

    @Get("")
    async getUsers(@Req() req: Request) {
        return this.userService.getAll();
    }

    @Get(":id")
    async get(@Param("key") id: number, @Req() req: Request) {
        return this.userService.findById(id);
    }

}