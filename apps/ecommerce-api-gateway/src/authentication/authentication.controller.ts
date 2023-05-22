<<<<<<< HEAD
import { UserLoginDTO } from '@app/common/authentication/UserLoginDTO';
import { IAuthenticationResponse } from '@app/common/authentication/authentication-response';
import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
=======
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
>>>>>>> main
export class AuthenticationController {
    constructor(@Inject('AUTHENTICATION') private readonly authenticationClient: ClientProxy) { }

    @Post()
<<<<<<< HEAD
    async login(@Body() login: UserLoginDTO): Promise<IAuthenticationResponse> {
        const request = this.authenticationClient.send({cmd: 'login'}, login);
        const response: IAuthenticationResponse = await firstValueFrom(request);
        if(response.status == HttpStatus.OK) 
=======
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
>>>>>>> main
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
