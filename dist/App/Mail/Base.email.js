"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailBase = void 0;
const google_auth_library_1 = require("google-auth-library");
const nodemailer = require("nodemailer");
class EmailBase {
    constructor(config) {
        this.config = config;
        this.oAuth2Client = new google_auth_library_1.OAuth2Client(config.get('GOOGLE_MAILER_CLIENT_ID'), config.get('GOOGLE_MAILER_CLIENT_SECRET'));
        this.oAuth2Client.setCredentials({
            refresh_token: config.get('GOOGLE_MAILER_REFRESH_TOKEN')
        });
    }
    async sendEmail() {
        try {
            const myAccessTokenObject = await this.oAuth2Client.getAccessToken();
            const myAccessToken = myAccessTokenObject === null || myAccessTokenObject === void 0 ? void 0 : myAccessTokenObject.token;
            console.log(myAccessToken);
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: this.config.get('ADMIN_EMAIL_ADDRESS'),
                    clientId: this.config.get('GOOGLE_MAILER_CLIENT_ID'),
                    clientSecret: this.config.get('GOOGLE_MAILER_CLIENT_SECRET'),
                    refresh_token: this.config.get('GOOGLE_MAILER_REFRESH_TOKEN'),
                    accessToken: myAccessToken
                }
            });
            const mailOptions = {
                to: this.email,
                subject: this.subject,
                html: this.html
            };
            return await transport.sendMail(mailOptions);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.EmailBase = EmailBase;
//# sourceMappingURL=Base.email.js.map