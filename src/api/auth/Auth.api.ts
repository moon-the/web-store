import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
import { AuthService } from 'src/Services/Auth.service';
import * as bcrypt from 'bcrypt';
import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
import { Request, Response } from 'express';
import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';
import { ConfigService } from '@nestjs/config';
import { link } from 'fs';
import { AuthGuard } from '@nestjs/passport';


@Controller("/api/v1/auth")
export class AuthAPI {

    constructor(private authService: AuthService, private config: ConfigService) { }

    @UsePipes(new ValidationPipe())
    @Post("login")
    login(@Body() req: UserLoginDTO) {
        return this.authService.login(req);
    }

    @UsePipes(new ValidationPipe())
    @Post("register")
    async register(@Body() req: UserRegisterDTO, @Req() request: Request) {
        let link = `${request.protocol}://${request.get("host")}/activated/`;
        return this.authService.register(req, link);
    }

    @Patch("activated/:key")
    async activated(@Param("key") key: string,@Req() req: Request, @Res() res: Response) {
        return this.authService.activated(key)
    }

    @Post("reactivated")
    async reActivated(@Req() req: Request, @Res() res: Response) {
        let token = req.cookies.accessToken || req.body.accessToken || req.headers.authorization.split(' ')[1];
        let link = `${req.protocol}://${req.get("host")}/activated/`
        token = await this.authService.reactivated(token, link);
    }

    @Get("get_token")
    @UseGuards(AuthGuard('jwt'))
    async getAccessToken(@Req() req: Request) {
        return this.authService.getToken(req.cookies.refreshToken|| req.headers.authorization.split(' ')[1]);
    }

    @UsePipes(new ValidationPipe())
    @Post("forget_password")
    async forgot(@Body() req: ForgotPasswordDTO, @Req() request: Request) {
        let host = `${request.protocol}://${request.get("host")}/reset_password/`
        return this.authService.forgetPassword(req, host);
    }

    @Delete("logout")
    async logoutPost(@Req() req: Request, @Res() res: Response) {
        let refreshToken = req.body.refreshToken || req.cookies.refreshToken || req.headers.authentication[0].split(' ')[1] || null;
        this.authService.logout(refreshToken);
    }

    @Patch("reset_password/:key")
    async reset(@Param("key") key: string, @Body() req: ResetPasswordDTO) {
        return this.authService.resetPassword(key, req);
    }

}