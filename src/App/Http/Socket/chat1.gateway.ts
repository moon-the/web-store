// import {
//     OnGatewayConnection,
//     OnGatewayDisconnect,
//     SubscribeMessage,
//     WebSocketGateway,
//     WebSocketServer,
// } from '@nestjs/websockets';
// import {Socket} from 'socket.io';
// import {ConflictException, ForbiddenException, NotFoundException} from '@nestjs/common';

// @WebSocketGateway()
// export class ChatWebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

//     @WebSocketServer() server;

//     // private static rooms: Map<string, RoomData> = new Map();
//     private static participants: Map<string, string> = new Map(); // sockedId => roomId

//     handleConnection(socket: Socket): void {
//         const socketId = socket.id;
//         console.log(`New connecting... socket id:`, socketId);
//         ChatWebsocketGateway.participants.set(socketId, '');
//     }

//     handleDisconnect(socket: Socket): void {
//         const socketId = socket.id;
//         console.log(`Disconnection... socket id:`, socketId);
//         const roomId = ChatWebsocketGateway.participants.get(socketId);
//         // const room = ChatWebsocketGateway.rooms.get(roomId);
//         // if (room) {
//         //     room.participants.get(socketId).connected = false;
//         //     this.server.emit(
//         //         `participants/${roomId}`,
//         //         Array.from(room.participants.values()),
//         //     );
//         // }
//     }

//     @SubscribeMessage('participants')
//     async onParticipate(socket: Socket, participant: Participant) {
//         const socketId = socket.id;
//         console.log(
//             `Registering new participant... socket id: %s and participant: `,
//             socketId,
//             participant,
//         );

       
//     }

//     @SubscribeMessage('exchanges')
//     async onMessage(socket: Socket, message: String) {
//         const socketId = socket.id;
//         console.log(
//             'Received new message... socketId: %s, message: ',
//             socketId,
//             message,
//         );
        
//     }

// }