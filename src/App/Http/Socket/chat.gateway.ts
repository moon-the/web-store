import { ConflictException, ForbiddenException, NotFoundException, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { DTOChat } from "../../../DTO/Rooms/chatDTO";
import { ChatHandle } from "../Controllers/Error/ChatHandle";
import { Room } from "src/DTO/Rooms/Room";
import { Participant } from "src/DTO/Rooms/Participant";
import { RoomDto } from "src/DTO/Rooms/RoomDTO";

@UseFilters(ChatHandle)
@WebSocketGateway(3001,{ cors: true})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server;
    private static rooms: Map<string, Room> = new Map();
    private static participants: Map<string, string> = new Map();

    handleConnection(socket: Socket) {
        const id = socket.id;
        console.log("new connect socket id: ", id);
        ChatGateway.participants.set(id, '');
    }

    handleDisconnect(socket: Socket) {
        const id = socket.id;
        console.log("disconnect socket id: ", id);
        let roomId = ChatGateway.participants.get(id);
        let room = ChatGateway.rooms.get(roomId);
        if(room) {
            room.participants.get(id).connected = false;
            this.server.emit(
                `participants/${roomId}`,
                Array.from(room.participants.values()),
            );
        }
    }

    @SubscribeMessage('participants')
    async joinRooms(socket: Socket, @MessageBody() message: Participant) {
        let soketId = socket.id;
        let roomId = message.roomId;
        if(ChatGateway.rooms.has(roomId)) {
            let room = ChatGateway.rooms.get(roomId);
            room.participants.set(soketId, message);
            this.server.emit(
                `participants/${roomId}`,
                Array.from(room.participants.values()),
            );
        }
        else {
            throw new ForbiddenException();
        }
    }

    @UsePipes(new ValidationPipe())
    @SubscribeMessage('message')
    async onMessage(socket: Socket, @MessageBody() message: DTOChat) {
        console.log(message.token, message.message)
        this.server.emit('message', message);
    }

    static createRoom(room: RoomDto): void {
        let roomId = room.roomId;
        if(this.rooms.has(roomId)){
            throw new ConflictException({message: `Room with '${roomId}' already exists`})
        }
        else {
            this.rooms.set(roomId, new Room(room.creatorUsername));
        }
    }

    static get(roomId: string): Room {
        return this.rooms.get(roomId)
    }
    
    static delete(roomId: string) {
        if (!this.rooms.has(roomId)) {
            throw new NotFoundException({message: `Room with '${roomId}' not found`})
        }
        this.rooms.delete(roomId);
    }
}