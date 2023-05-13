"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassword = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const config_1 = require("@nestjs/config");
const Base_email_1 = require("./Base.email");
const path_1 = require("path");
const ejs = require("ejs");
let ForgotPassword = class ForgotPassword extends Base_email_1.EmailBase {
    constructor(config) {
        super(config);
    }
    async create(email, link) {
        this.email = email;
        this.subject = "kích hoạt tài khoản";
        let message = "để đổi lại mật khẩu vui lòng ấn vào nút bên dưới";
        let button = "reset password";
        this.html = await ejs.renderFile((0, path_1.join)(__dirname, "..", "..", "..", "/src/views/email/activeAccount.ejs"), { link: link, message: message, button: button });
    }
};
ForgotPassword = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ForgotPassword);
exports.ForgotPassword = ForgotPassword;
//# sourceMappingURL=ForgotPassword.email.js.map