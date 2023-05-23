import { UserLoginDTO } from '@app/common/Authentication/UserLoginDTO';
import { IResponse } from '@app/common/Authentication/Responses/IResponse';
import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LoginResponse } from '@app/common/authentication/Responses/login-response';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RegisterReponse } from '@app/common/authentication/Responses/register-response';
import { UserRegisterDTO } from '@app/common/Authentication/UserRegisterDTO';
@ApiTags('Authetication')
@Controller("auth")
export class AuthenticationController {
    constructor(@Inject('AUTHENTICATION') private readonly authenticationClient: ClientProxy) { }

    @Post()
    async login(@Body() login: UserLoginDTO): Promise<LoginResponse> {
        const request = this.authenticationClient.send({cmd: 'login'}, login);
        const response: IResponse = await firstValueFrom(request);
        if(response.status != HttpStatus.OK) 
        {
            throw new HttpException({
                data: null,
                message: response.message,
                errors: response.errors
            }, response.status);
        }
        return response;
    }

    async register(@Body() register: UserRegisterDTO): Promise<RegisterReponse> {
        const request = this.authenticationClient.send({cmd: 'register'}, register);
        const response: IResponse = await firstValueFrom(request);
        if(response.status != HttpStatus.OK) 
        {
            throw new HttpException({
                data: null,
                message: response.message,
                errors: response.errors
            }, response.status);
        }
        return response;
    }

}
