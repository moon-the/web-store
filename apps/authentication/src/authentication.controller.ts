import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { MessagePattern } from '@nestjs/microservices';
<<<<<<< HEAD
import { UserLoginDTO } from '@app/common/authentication/UserLoginDTO';
import { UserRegisterDTO } from '@app/common/authentication/UserRegisterDTO';
import { ActivatedDTO } from '@app/common/authentication/activated.dto';
=======
import { UserLoginDTO } from '@app/common/Authentication/UserLoginDTO';
import { UserRegisterDTO } from '@app/common/Authentication/UserRegisterDTO';
import { ActivatedDTO } from '@app/common/Authentication/activated.dto';
>>>>>>> main

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

<<<<<<< HEAD
  @MessagePattern({cmd: 'login'})
  login(login: UserLoginDTO) {
    return this.authenticationService.login(login);
  }

  @MessagePattern({cmd: 'register'})
  register(register: UserRegisterDTO) {
    return this.authenticationService.register(register);
  }

  @MessagePattern({cmd: 'activated'})
  activated(req: ActivatedDTO) {
    return this.authenticationService.activated(req);
  }
=======
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
>>>>>>> main
  
}
