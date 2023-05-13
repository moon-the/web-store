import { JwtService } from '@nestjs/jwt';
import { MessageService } from 'src/Services/Message.service';
import { Request, Response } from 'express';
import { RoomDto } from 'src/DTO/Rooms/RoomDTO';
import { AuthService } from 'src/Services/Auth.service';
import { ConfigService } from '@nestjs/config';
export declare class ChatController {
    private authService;
    private config;
    private jwt;
    private messageService;
    constructor(authService: AuthService, config: ConfigService, jwt: JwtService, messageService: MessageService);
    newRoom(room: RoomDto, req: Request, res: Response): void;
    getMessage(roomId: string, res: Response): void;
    deleteRoom(roomId: string, req: Request, res: Response): Promise<void>;
}
