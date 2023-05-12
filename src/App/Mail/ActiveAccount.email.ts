import { Injectable } from "@nestjs/common/decorators";
import { ConfigService } from "@nestjs/config";
import { EmailBase } from "./Base.email";
import {join} from 'path';
import * as ejs from 'ejs';
@Injectable()
export class ActiveAccountEmail extends EmailBase {
    constructor(config: ConfigService) {
        super(config);
    }

    public async create(email: string, link: string) {
        this.email = email;
        this.subject = "kích hoạt tài khoản";
        let message: string = "Để kích hoạt tài khoản vui lòng nhấn vào nút bên dưới";
        let button: string = "active account";
        this.html = await ejs.renderFile(join(__dirname , "..", "..", ".." , "/src/views/email/activeAccount.ejs"), { link: link , message: message, button: button});
    }

}