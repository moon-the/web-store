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


@Controller("/api/v1/auth")
export class AuthAPI {

    constructor(private authService: AuthService, private config: ConfigService) { }

    @UsePipes(new ValidationPipe())
    @Post("login")
    async login(@Body() req: UserLoginDTO, @Res() res: Response) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.username);
        if (user) {
            let check = await bcrypt.compare(req.password, user.password);
            if (check) {
                let token = await this.authService.getToken(user.userName);
                if (user.activated) {
                    await this.authService.setToken(user.id, token.refreshToken);
                    res.cookie("refreshToken", token.refreshToken);
                    res.cookie("accessToken", token.accessToken);
                    return res.status(200).json({ status: 200, message: "OK", token: token });
                } else {
                    return res.status(401).json({ status: 401, message: "Tài khoản chưa được kích hoạt", token: token.refreshToken });
                }
            }
            else {
                return res.status(401).json({ status: 401, message: "Sai Mật Khẩu", token: null });
            }
        }
        else {
            return res.status(404).json({ status: 404, message: "Tài Khoản Không Tồn Tại", token: null });;
        }
    }



    @UsePipes(new ValidationPipe())
    @Post("register")
    async register(@Body() req: UserRegisterDTO, @Req() request: Request, @Res() res: Response) {
        let user = await this.authService.findByUserNameOrEmail(req.username, req.email);
        if (!user) {
            let salt = await bcrypt.genSalt();
            req.password = await bcrypt.hash(req.password, salt);
            user = await this.authService.register(req.username, req.email, req.password);
            if (user) {
                let token = await this.authService.generateKeyJWT({ idActivated: user.id });
                let activated = new ActiveAccountEmail(this.config);
                let link = `${request.protocol}://${request.get("host")}/activated/${token}`;
                activated.create(req.email, link);
                activated.sendEmail();
                return res.status(201).json({ status: 201, message: "OK" });
            }
        }

        return req.username == user.userName ? res.status(409).json({
            status: 409,
            message: "username đã tồn tại"
        }) : res.status(409).json({
            status: 409,
            message: "email đã tồn tại"
        })
    }

    @Get("activated/:key")
    async activated(@Param("key") key: string,@Req() req: Request, @Res() res: Response) {
        const decode = await this.authService.verifyToken(key);
        if (decode) {
            let idUser = (<any>decode).idActivated || null;
            let user = await this.authService.findById(idUser);
            if (user) {
                if (!user.activated) {
                    user.activated = !user.activated;
                    user = await this.authService.activated(user);
                    if (user != null) {
                        return res.status(201).json({
                            status: 201, 
                            message: "OK"
                        });
                    }
                }
            }
        }
        throw new HttpException({ message: "Link không hợp lệ" }, HttpStatus.UNAUTHORIZED);
    }

    @Post("reactivated")
    async reActivated(@Req() req: Request, @Res() res: Response) {
        let token = req.cookies.accessToken;
        if (token) {
            let decode = this.authService.verifyToken(token);
            let username = (<any>decode).username || null;
            if (username){
                let user = await this.authService.findByUserName(username);
                let activated = new ActiveAccountEmail(this.config);
                let token_ = await this.authService.generateKeyJWT({ idActivated: user.id });
                let link = `${req.protocol}://${req.get("host")}/activated/${token_}`
                activated.create(user.email, link);
                activated.sendEmail();
                return res.status(202).json({ status: 202, message: "OK" });
            }
        }
        throw new HttpException({ message: "bạn chưa đăng nhập" }, HttpStatus.UNAUTHORIZED);
    }

    @Get("get_token")
    async getAccessToken(@Req() req: Request, @Res() res: Response) {
        if (req.cookies.refreshToken) {
            let token = await this.authService.findToken(req.cookies.refreshToken);
            if (token) {
                const decode = await this.authService.verifyToken(req.cookies.refreshToken);
                if (decode) {
                    let user = (<any>decode).username;
                    return res.status(200).json({
                        status: 200, message: "OK", token: {
                            accessToken: await this.authService.generateAccessToken(user),
                            refreshToken: req.cookies.refreshToken
                        }
                    });
                }
            }
        }
        return res.status(401).json({
            status: 401,
            message: "token expired",
            token: null
        })
    }

    @UsePipes(new ValidationPipe())
    @Post("forget_password")
    async forgot(@Body() req: ForgotPasswordDTO, @Req() request: Request, @Res() res: Response) {
        const user = await this.authService.findByUserNameAndEmail(req.username, req.email);
        if (user) {
            let token = await this.authService.generateKeyJWT({ idForget: user.id });
            let activated = new ActiveAccountEmail(this.config);
            let link = `${request.protocol}://${request.get("host")}/reset_password/${token}`
            activated.create(req.email, link);
            activated.sendEmail();
            return res.status(200).json({
                status: 200,
                message: "Ok"
            })
        }
        return res.status(401).json({
            status: 402,
            message: "yêu cầu không hợp lệ"
        })
    }

    @Delete("logout")
    async logoutPost(@Req() req: Request, @Res() res: Response) {
        let refreshToken = req.body.refreshToken || req.cookies.refreshToken || req.headers.authentication[0].split(' ')[1] || null;
        if (refreshToken) {
            let token = await this.authService.findToken(refreshToken);
            if (token) {
                this.authService.deleteToken(token);
            }
        }
        return res.status(200).json({
            status: 200, message: "OK"
        })
    }

    @Patch("reset_password/:key")
    async reset(@Param("key") key: string, @Body() req: ResetPasswordDTO, @Res() res: Response) {
        if (req.newPassword == req.confirmPassword) {
            const decode = await this.authService.verifyToken(key);
            if (decode) {
                let idUser = (<any>decode).idForget;
                let user = await this.authService.findById(idUser);
                if (user) {
                    let salt = await bcrypt.genSalt();
                    let password = await bcrypt.hash(req.newPassword, salt);
                    user.password = password;
                    user = await this.authService.updateUser(user);
                }
            }
            else {
                return res.status(401).json({
                    status: 401,
                    message: "key reset password error"
                })
            }
        }
        return res.status(400).json({
            status: 400,
            message: ""
        })
    }

}