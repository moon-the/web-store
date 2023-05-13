import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Req, Res, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { MessageService } from 'src/Services/Message.service';
import {Request, Response} from 'express';
import { ChatGateway } from '../Socket/chat.gateway';
import { RoomDto } from 'src/DTO/Rooms/RoomDTO';
import { AuthService } from 'src/Services/Auth.service';
import { ConfigService } from '@nestjs/config';


@Controller("/chat")
export class ChatController {

    constructor (private authService: AuthService, private config: ConfigService, private jwt : JwtService, private messageService: MessageService) {

    }
    @UseGuards(AuthGuard('jwt'))
    @Post("/creat_room")
    newRoom(@Body() room: RoomDto ,req: Request , res: Response): void {
        ChatGateway.createRoom(room);
        let url = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.redirect(url);
    }

    @Get("/:id")
    getMessage(@Param('id') roomId: string, @Res() res: Response) {
       res.render("chats")
    }


    @UseGuards(AuthGuard('jwt'))
    @Post("/delete/:id")
    async deleteRoom(@Param("id") roomId: string, @Req() req: Request, @Res() res: Response) {
        let username = ChatGateway.get(roomId).createdBy;
        let token = req.cookies.accessToken;
        if(token) {
            let decode = await this.authService.verifyToken(token);
            if((<any>decode).username == username) {
            //    return res.r 
            }
        }
    }
}
