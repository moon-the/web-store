import { Injectable } from "@nestjs/common/decorators";
import { ConfigService } from "@nestjs/config";
import { EmailBase } from "./Base.email";
import {join} from 'path';
import * as ejs from 'ejs';
@Injectable()
export class ForgotPassword extends EmailBase {
    constructor(config: ConfigService) {
        super(config);
    }

    public async create(email: string, link: string) {
        this.email = email;
        this.subject = "kích hoạt tài khoản";
        let message: string = "để đổi lại mật khẩu vui lòng ấn vào nút bên dưới";
        let button: string = "reset password";
        this.html = await ejs.renderFile(join(__dirname , "..", "..", ".." , "/src/views/email/activeAccount.ejs"), { link: link , message: message, button: button});
    }

}