import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { ChatController } from '../chat.controller';
import { ChatGateway } from '../../Socket/chat.gateway';
import { MessageService } from 'src/Services/Message.service';


@Module({
    controllers: [ChatController],
    providers: [ChatGateway, JwtService, JwtStrategy, MessageService],
})
export class ChatModule { }