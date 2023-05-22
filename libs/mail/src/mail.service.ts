import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './send-email.dto';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import { join } from 'path';

@Injectable()
export class MailService {
    private oAuth2Client: OAuth2Client;
    constructor(private config: ConfigService) {
        this.oAuth2Client = new OAuth2Client(
            config.get('GOOGLE_MAILER_CLIENT_ID'),
            config.get('GOOGLE_MAILER_CLIENT_SECRET')
        )

        this.oAuth2Client.setCredentials({
            refresh_token: config.get('GOOGLE_MAILER_REFRESH_TOKEN')
        })
    }


    async sendEmail(sendEmailDto: SendEmailDto) {
        try {
            const myAccessTokenObject = await this.oAuth2Client.getAccessToken()
            const myAccessToken = myAccessTokenObject?.token
            console.log(myAccessToken)
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
            })

            const mailOptions = {
                to: sendEmailDto.user.email,
                subject: sendEmailDto.subject,
                html: await ejs.renderFile(join(`${process.cwd()}/libs/mail/templates/${sendEmailDto.template}`), sendEmailDto.context)
            }

            return await transport.sendMail(mailOptions)

        } catch (error) {
            console.log(error)
        }
    }
}
