// import { Body, Controller, Get, HttpStatus, Param, Post, Put, Render, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
// import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
// import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
// import { AuthService } from 'src/Services/Auth.service';
// import * as bcrypt from 'bcrypt';
// import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
// import { TokenDTO } from 'src/DTO/TokenDTO';
// import { request, Request, Response } from 'express';
// import { ForbiddenException, HttpException } from '@nestjs/common/exceptions';
// import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
// import { ConfigService } from '@nestjs/config';
// import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';


// @Controller("auth")
// export class AuthController {

//     constructor(private authService: AuthService, private config: ConfigService) { }
//     @Get("login")
//     async getlogin(@Req() req: Request, @Res() res: Response) {
//         let token = req.cookies.accessToken;
//         if (token) {
//             let decode = this.authService.verifyToken(token);
//             if (decode) {
//                 return res.redirect("./home");
//             }
//         }
//         return res.render("login");
//     }

//     @Get("reset_password/:key")
//     @Render('resetPassword')
//     async resetPass(@Param("key") key: string) {
//         const decode = await this.authService.verifyToken(key);
//         if (decode) {
//             return;
//         }
//         throw new ForbiddenException();
//     }

//     @Post("login")
//     @UsePipes(new ValidationPipe())
//     @Post("login")
//     async login(@Body() req: UserLoginDTO, @Res({ passthrough: true }) res: Response) {
//         let user = await this.authService.findByUserNameOrEmail(req.username, req.username);
//         if (user) {
//             if (user.activated) {
//                 let check = await bcrypt.compare(req.password, user.password);
//                 if (check) {
//                     let token = await this.authService.getToken(user.userName);
//                     await this.authService.setToken(user.id, token.refreshToken);
//                     res.cookie("refreshToken", token.refreshToken);
//                     res.cookie("accessToken", token.accessToken);
//                     return token;
//                 }
//                 else {
//                     return "sai mật khẩu";
//                 }
//             }
//             else {
//                 return "tài khoản chưa được kích hoạt";
//             }
//         }
//         else {
//             return "tài khoản không tồn tại";
//         }
//     }


//     @Get("register")
//     @Render("signup")
//     getRegister() {
//         return {};
//     }

//     @Get("getkey")
//     getPublicKey() {
//         return AuthService.getPublicKey();
//     }

//     @UsePipes(new ValidationPipe())
//     @Post("register")
//     async register(@Body() req: UserRegisterDTO, @Req() requet: Request) {
//         let user = await this.authService.findByUserNameOrEmail(req.username, req.email);
//         if (!user) {
//             let salt = await bcrypt.genSalt();
//             req.password = await bcrypt.hash(req.password, salt);
//             user = await this.authService.register(req.username,req.email, req.password);
//             if (user) {
//                 let token = await this.authService.generateKeyJWT({ idActivated: user.id });
//                 let activated = new ActiveAccountEmail(this.config);
//                 let link = `${requet.protocol}://${requet.get("host")}/activated/${token}`
//                 activated.create(req.email, link);
//                 activated.sendEmail();
//                 return { status: 200, message: "OK" };
//             }
//         }

//         return req.username == user.userName ? {
//             status: 402,
//             message: "username đã tồn tại"
//         } : {
//             status: 402,
//             message: "email đã tồn tại"
//         }
//     }

//     @UsePipes(new ValidationPipe())
//     @Post("get_token")
//     async accessToken(@Body() req: TokenDTO) {
//         let token = await this.authService.findToken(req.refreshToken);
//         if (token) {
//             const decode = await this.authService.verifyToken(req.refreshToken);
//             if (decode) {
//                 let user = (<any>decode).username;
//                 return {
//                     accessToken: await this.authService.generateAccessToken(user),
//                     refreshToken: req.refreshToken
//                 }
//             }
//         }
//         return {
//             status: 402,
//             message: "token expired"
//         }
//     }

//     @Get("get_token")
//     async getAccessToken(@Req() req: Request) {
//         if (req.cookies.refreshToken) {
//             let token = await this.authService.findToken(req.cookies.refreshToken);
//             if (token) {
//                 const decode = await this.authService.verifyToken(req.cookies.refreshToken);
//                 if (decode) {
//                     let user = (<any>decode).username;
//                     return {
//                         accessToken: await this.authService.generateAccessToken(user),
//                         refreshToken: req.cookies.refreshToken
//                     }
//                 }
//             }
//         }
//         return {
//             status: 402,
//             message: "token expired"
//         }
//     }

//     @Get("forgot_password")
//     @Render("forgotPassword")
//     async getForgot() {
//         return;
//     }

//     @UsePipes(new ValidationPipe())
//     @Post("forget_password")
//     async forgot(@Body() req: ForgotPasswordDTO, @Req() requet: Request) {
//         const user = await this.authService.findByUserNameAndEmail(req.username, req.email);
//         if (user) {
//             let token = await this.authService.generateKeyJWT({ idForget: user.id });
//             let activated = new ActiveAccountEmail(this.config);
//             let link = `${requet.protocol}://${requet.get("host")}/reset_password/${token}`
//             activated.create(req.email, link);
//             activated.sendEmail();
//             return "OK";
//         }
//         return {
//             status: 402,
//             message: "yêu cầu không hợp lệ"
//         }
//     }

//     @Post("reactivated")
//     async reActivated(@Req() req: Request, @Res() res: Response) {
//         let token = req.cookies.accessToken;
//         if (token) {
//             let decode = this.authService.verifyToken(token);
//             let idUser = (<any>decode).idActivated || null;
//             if (idUser){
//                 let user = await this.authService.findById(idUser);
//                 let activated = new ActiveAccountEmail(this.config);
//                 let link = `${req.protocol}://${req.get("host")}/reset_password/${token}`
//                 activated.create(user.email, link);
//                 activated.sendEmail();
//                 return { status: 200, message: "OK" };
//             }
//         }
//         throw new HttpException({ message: "Link không hợp lệ" }, HttpStatus.UNAUTHORIZED);
//     }

//     @Get("activated/:key")
//     async activated(@Param("key") key: string,@Req() req: Request, @Res() res: Response) {
//         const decode = await this.authService.verifyToken(key);
//         if (decode) {
//             let idUser = (<any>decode).idActivated || null;
//             let user = await this.authService.findById(idUser);
//             if (user) {
//                 if (!user.activated) {
//                     user.activated = !user.activated;
//                     user = await this.authService.activated(user);
//                     if (user != null) {
//                         res.status(201);
//                         return res.redirect(`${req.protocol}://${req.get("host")}/user/login`);
//                     }
//                 }
//             }
//         }
//         throw new HttpException({ message: "Link không hợp lệ" }, HttpStatus.UNAUTHORIZED);
//     }

//     @Get("logout")
//     async logout(@Req() req: Request) {
//         let refreshToken = req.cookies.refreshToken;
//         if (refreshToken) {
//             let token = await this.authService.findToken(refreshToken);
//             if (token) {
//                 this.authService.deleteToken(token);
//             }
//         }
//     }

//     @Post("reset_password/:key")
//     async reset(@Param("key") key: string, @Body() req: ResetPasswordDTO, @Res() Res: Response) {
//         if (req.newPassword == req.confirmPassword) {
//             const decode = await this.authService.verifyToken(key);
//             if (decode) {
//                 let idUser = (<any>decode).idForget || null;
//                 let user = await this.authService.findById(idUser);
//                 let salt = await bcrypt.genSalt();
//                 let password = await bcrypt.hash(req.newPassword, salt);
//                 user.password = password;
//                 user = await this.authService.updateUser(user);
//                 return Res.redirect("login");
//             }
//             else {
//                 throw new ForbiddenException();
//             }
//         }
//         else {
//             Res.redirect("reset_password/" + key);
//         }

//     }

// }