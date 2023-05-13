import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { DTOChat } from "../../../DTO/Rooms/chatDTO";
import { Room } from "src/DTO/Rooms/Room";
import { Participant } from "src/DTO/Rooms/Participant";
import { RoomDto } from "src/DTO/Rooms/RoomDTO";
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: any;
    private static rooms;
    private static participants;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    joinRooms(socket: Socket, message: Participant): Promise<void>;
    onMessage(socket: Socket, message: DTOChat): Promise<void>;
    static createRoom(room: RoomDto): void;
    static get(roomId: string): Room;
    static delete(roomId: string): void;
}
