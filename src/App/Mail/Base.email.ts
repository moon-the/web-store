import { ConfigService } from '@nestjs/config';
import {OAuth2Client}  from 'google-auth-library';
import * as nodemailer from 'nodemailer';

export abstract class EmailBase {
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

    protected email: string;
    protected subject: string;
    protected html;

    async sendEmail() {
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
              to: this.email, 
              subject: this.subject, 
              html: this.html
          }
      
          return await transport.sendMail(mailOptions)
      
      } catch (error) {
          console.log(error)
      }
  }
}