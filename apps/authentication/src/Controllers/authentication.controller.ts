import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserLoginDTO } from '@app/common/authentication/UserLoginDTO';
import { AuthenticationService } from '../Services/authentication.service';
import { UserRegisterDTO } from '@app/common/authentication/UserRegisterDTO';
import { ActivatedDTO } from '@app/common/authentication/activated.dto';

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @MessagePattern({ cmd: 'login' })
  login(login: UserLoginDTO) {
    return this.authenticationService.login(login);
  }

  @MessagePattern({ cmd: 'login' })
  async register(req: UserRegisterDTO) {
    return this.authenticationService.register(req);
  }

  @MessagePattern({ cmd: 'login' })
  async getPublicKey(req: UserRegisterDTO) {
    return this.authenticationService.register(req);
  }

  @MessagePattern({ cmd: 'activated' })
  async activated(req: ActivatedDTO) {
    return this.authenticationService.activated(req);
  }


}
