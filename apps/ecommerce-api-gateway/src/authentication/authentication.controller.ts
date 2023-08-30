import { UserLoginDTO } from '@app/common/authentication/UserLoginDTO';
import { IAuthenticationResponse } from '@app/common/authentication/authentication-response';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AuthenticationController {
  constructor(
    @Inject('AUTHENTICATION')
    private readonly authenticationClient: ClientProxy,
  ) {}

  @Post()
  async login(@Body() login: UserLoginDTO): Promise<IAuthenticationResponse> {
    const request = this.authenticationClient.send({ cmd: 'login' }, login);
    const response: IAuthenticationResponse = await firstValueFrom(request);
    if (response.status == HttpStatus.OK) {
      throw new HttpException(
        {
          data: null,
          message: response.message,
          errors: response.errors,
        },
        response.status,
      );
    }
    return response;
  }
}
