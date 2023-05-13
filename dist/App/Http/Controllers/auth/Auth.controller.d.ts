import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
import { AuthService } from 'src/Services/Auth.service';
import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
import { TokenDTO } from 'src/DTO/TokenDTO';
import { Request, Response } from 'express';
import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private authService;
    private config;
    constructor(authService: AuthService, config: ConfigService);
    getlogin(req: Request, res: Response): Promise<void>;
    resetPass(key: string): Promise<void>;
    login(req: UserLoginDTO, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
    } | "sai mật khẩu" | "tài khoản chưa được kích hoạt" | "tài khoản không tồn tại">;
    getRegister(): {};
    getPublicKey(): string;
    register(req: UserRegisterDTO, requet: Request): Promise<{
        status: number;
        message: string;
    }>;
    accessToken(req: TokenDTO): Promise<{
        accessToken: string;
        refreshToken: string;
        status?: undefined;
        message?: undefined;
    } | {
        status: number;
        message: string;
        accessToken?: undefined;
        refreshToken?: undefined;
    }>;
    getAccessToken(req: Request): Promise<{
        accessToken: string;
        refreshToken: any;
        status?: undefined;
        message?: undefined;
    } | {
        status: number;
        message: string;
        accessToken?: undefined;
        refreshToken?: undefined;
    }>;
    getForgot(): Promise<void>;
    forgot(req: ForgotPasswordDTO, requet: Request): Promise<"OK" | {
        status: number;
        message: string;
    }>;
    reActivated(req: Request, key: string, res: Response): Promise<{
        status: number;
        message: string;
    }>;
    activated(key: string, req: Request, res: Response): Promise<void>;
    logout(req: Request): Promise<void>;
    reset(key: string, req: ResetPasswordDTO, Res: Response): Promise<void>;
}
