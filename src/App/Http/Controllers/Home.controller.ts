import { Controller, Get, Post, Render, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { ActiveAccountEmail } from 'src/App/Mail/ActiveAccount.email';
import { AuthGuard } from '@nestjs/passport';


@Controller("index")
export class HomeController {
    constructor() { }
    
    //@UseGuards(AuthGuard('jwt'))
    @Get("")
    @Render("index")
    index() {
        return {}
    }
}
