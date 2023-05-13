"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chatDTO_1 = require("../../../DTO/Rooms/chatDTO");
const ChatHandle_1 = require("../Controllers/Error/ChatHandle");
const Room_1 = require("../../../DTO/Rooms/Room");
const Participant_1 = require("../../../DTO/Rooms/Participant");
let ChatGateway = ChatGateway_1 = class ChatGateway {
    handleConnection(socket) {
        const id = socket.id;
        console.log("new connect socket id: ", id);
        ChatGateway_1.participants.set(id, '');
    }
    handleDisconnect(socket) {
        const id = socket.id;
        console.log("disconnect socket id: ", id);
        let roomId = ChatGateway_1.participants.get(id);
        let room = ChatGateway_1.rooms.get(roomId);
        if (room) {
            room.participants.get(id).connected = false;
            this.server.emit(`participants/${roomId}`, Array.from(room.participants.values()));
        }
    }
    async joinRooms(socket, message) {
        let soketId = socket.id;
        let roomId = message.roomId;
        if (ChatGateway_1.rooms.has(roomId)) {
            let room = ChatGateway_1.rooms.get(roomId);
            room.participants.set(soketId, message);
            this.server.emit(`participants/${roomId}`, Array.from(room.participants.values()));
        }
        else {
            throw new common_1.ForbiddenException();
        }
    }
    async onMessage(socket, message) {
        console.log(message.token, message.message);
        this.server.emit('message', message);
    }
    static createRoom(room) {
        let roomId = room.roomId;
        if (this.rooms.has(roomId)) {
            throw new common_1.ConflictException({ message: `Room with '${roomId}' already exists` });
        }
        else {
            this.rooms.set(roomId, new Room_1.Room(room.creatorUsername));
        }
    }
    static get(roomId) {
        return this.rooms.get(roomId);
    }
    static delete(roomId) {
        if (!this.rooms.has(roomId)) {
            throw new common_1.NotFoundException({ message: `Room with '${roomId}' not found` });
        }
        this.rooms.delete(roomId);
    }
};
ChatGateway.rooms = new Map();
ChatGateway.participants = new Map();
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('participants'),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Participant_1.Participant]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "joinRooms", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, websockets_1.SubscribeMessage)('message'),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chatDTO_1.DTOChat]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onMessage", null);
ChatGateway = ChatGateway_1 = __decorate([
    (0, common_1.UseFilters)(ChatHandle_1.ChatHandle),
    (0, websockets_1.WebSocketGateway)(3001, { cors: true })
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map