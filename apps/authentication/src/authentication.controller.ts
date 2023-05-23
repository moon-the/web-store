import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserLoginDTO } from '@app/common/Authentication/UserLoginDTO';
import { UserRegisterDTO } from '@app/common/Authentication/UserRegisterDTO';
import { ActivatedDTO } from '@app/common/Authentication/activated.dto';

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  // @MessagePattern({cmd: 'login'})
  // login(login: UserLoginDTO) {
  //   return this.authenticationService.login(login);
  // }

  // @MessagePattern({cmd: 'register'})
  // register(register: UserRegisterDTO) {
  //   return this.authenticationService.register(register);
  // }

  // @MessagePattern({cmd: 'activated'})
  // activated(req: ActivatedDTO) {
  //   return this.authenticationService.activated(req);
  // }
  
}
