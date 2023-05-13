import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';


@Controller("upload")
export class FileController {
  constructor(private config: ConfigService){}
  @Post("")
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  @Get("/test")
  test() {
    let  acctive = new ActiveAccountEmail(this.config);
    acctive.create("vumanhhung311@gmail.com","http://localhost:3000");
    acctive.sendEmail()
  }
}
