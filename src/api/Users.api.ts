import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
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


@Controller("/api/v1/user")
export class UsersAPI {

    constructor(private authService: AuthService, private config: ConfigService) { }

    

}