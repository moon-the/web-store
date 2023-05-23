import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserLoginDTO } from '@app/common/Authentication/UserLoginDTO';
import { AuthenticationService } from '../Services/authentication.service';
import { UserRegisterDTO } from '@app/common/Authentication/UserRegisterDTO';
import { ActivatedDTO } from '@app/common/Authentication/activated.dto';
import { ForgotPasswordDTO } from '@app/common/Authentication/ForgotPasswordDTO';
import { ResetPasswordDTO } from '@app/common/Authentication/ResetPasswordDTO';

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @MessagePattern({ cmd: 'login' })
  login(login: UserLoginDTO) {
    return this.authenticationService.login(login);
  }

  @MessagePattern({ cmd: 'register' })
  register(req: UserRegisterDTO) {
    return this.authenticationService.register(req);
  }

  @MessagePattern({ cmd: 'publickey' })
  getPublicKey() {
    return AuthenticationService.getPublicKey();
  }

  @MessagePattern({ cmd: 'reactivated' })
  activated(token: string) {
    return this.authenticationService.reactivated(token);
  }

  @MessagePattern({ cmd: 'activated' })
  reactivated(req: ActivatedDTO) {
    return this.authenticationService.activated(req);
  }

  @MessagePattern({ cmd: 'getToken' })
  async getToken(token: string) {
    return this.authenticationService.getToken(token);
  }

  @MessagePattern({ cmd: 'open2FA' })
  async open2FA(token: string) {
    return this.authenticationService.open2FA(token);
  }

  @MessagePattern({ cmd: 'verifyOTP' })
  async verifyOTP(verify: { token: string, otp: string }) {
    return this.authenticationService.verifyOTP(verify.token, verify.otp);
  }

  @MessagePattern({ cmd: 'forgetPassword' })
  async forgetPassword(forget: ForgotPasswordDTO) {
    return this.authenticationService.forgetPassword(forget);
  }

  @MessagePattern({ cmd: 'resetPassword' })
  async resetPassword(reset: {key: string, resetPass: ResetPasswordDTO}) {
    return this.authenticationService.resetPassword(reset.key, reset.resetPass);
  }

  @MessagePattern({ cmd: 'logout' })
  async logout(logout: {refreshToken: string}) {
    return this.authenticationService.logout(logout.refreshToken);
  }

  @MessagePattern({ cmd: 'logoutAll' })
  async logoutAll(logout: {accessToken: string}) {
    return this.authenticationService.logout(logout.accessToken);
  }  


}
