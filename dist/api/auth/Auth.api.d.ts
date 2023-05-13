import { UserRegisterDTO } from 'src/DTO/UserRegisterDTO';
import { UserLoginDTO } from 'src/DTO/UserLoginDTO';
import { AuthService } from 'src/Services/Auth.service';
import { ForgotPasswordDTO } from 'src/DTO/ForgotPasswordDTO';
import { Request, Response } from 'express';
import { ResetPasswordDTO } from 'src/DTO/ResetPasswordDTO';
export declare class AuthAPI {
    private authService;
    constructor(authService: AuthService);
    login(req: UserLoginDTO, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
    } | "sai mật khẩu" | "tài khoản không tồn tại">;
    register(req: UserRegisterDTO): Promise<{
        status: number;
        message: string;
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
    forgot(req: ForgotPasswordDTO): Promise<{
        status: number;
        message: string;
    }>;
    logoutPost(body: any, req: Request): Promise<void>;
    reset(key: string, req: ResetPasswordDTO): Promise<string>;
}
