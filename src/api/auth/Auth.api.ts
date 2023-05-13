import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
import { AuthService } from 'src/Services/Auth.service';
import * as bcrypt from 'bcrypt';
import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
import { TokenDTO } from 'src/DTO/TokenDTO';
import { Request, Response } from 'express';
import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';


@Controller("/api/v1/user")
export class AuthAPI {

    constructor(private authService: AuthService) { }

    @UsePipes(new ValidationPipe())
    @Post("login")
    async login(@Body() req: UserLoginDTO, @Res({ passthrough: true }) res: Response) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.username);
        if (user) {
            let check = await bcrypt.compare(req.password, user.password);
            if (check) {
                let token = await this.authService.getToken(user.userName);
                await this.authService.setToken(user.id, token.refreshToken);
                res.cookie("refreshToken", token.refreshToken);
                res.cookie("accessToken", token.accessToken);
                return token;
            }
            else {
                return "sai mật khẩu";
            }
        }
        else {
            return "tài khoản không tồn tại";
        }
    }



    @UsePipes(new ValidationPipe())
    @Post("register")
    async register(@Body() req: UserRegisterDTO) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.email);
        if (!user) {
            let salt = await bcrypt.genSalt();
            req.password = await bcrypt.hash(req.password, salt);
            user = await this.authService.register(req.username,req.email, req.password);
            if (user) {
                return { status: 200, message: "OK" };
            }
        }

        return req.username == user.userName ? {
            status: 402,
            message: "username đã tồn tại"
        } : {
            status: 402,
            message: "email đã tồn tại"
        }
    }


    @Get("get_token")
    async getAccessToken(@Req() req: Request) {
        if (req.cookies.refreshToken) {
            let token = await this.authService.findToken(req.cookies.refreshToken);
            if (token) {
                const decode = await this.authService.verifyToken(req.cookies.refreshToken);
                if (decode) {
                    let user = (<any>decode).username;
                    return {
                        accessToken: await this.authService.generateAccessToken(user),
                        refreshToken: req.cookies.refreshToken
                    }
                }
            }
        }
        return {
            status: 402,
            message: "token expired"
        }
    }

    @UsePipes(new ValidationPipe())
    @Post("forgot_password")
    async forgot(@Body() req: ForgotPasswordDTO) {
        const user = await this.authService.findByUserName(req.username) &&
            await this.authService.findByEmail(req.email);
        if (user) {

        }
        return {
            status: 402,
            message: "yêu cầu không hợp lệ"
        }
    }

    @Delete("logout")
    async logoutPost(@Body() body, @Req() req: Request) {
        let refreshToken = body.refreshToken || req.cookies.refreshToken;
        if (refreshToken) {
            let token = await this.authService.findToken(refreshToken);
            if (token) {
                this.authService.deleteToken(token);
            }
        }
    }

    @Patch("reset_password/:key")
    async reset(@Param("key") key: string, @Body() req: ResetPasswordDTO) {
        if (req.newPassword == req.confirmPassword) {
            const decode = await this.authService.verifyToken(key);
            if (decode) {
                let idUser = (<any>decode).id;
                let user = await this.authService.findById(idUser);
                if (user) {
                    let salt = await bcrypt.genSalt();
                    let password = await bcrypt.hash(req.newPassword, salt);
                    user.password = password;
                    user = await this.authService.updateUser(user);
                }
            }
        }
        return key;
    }

}