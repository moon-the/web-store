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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const Message_service_1 = require("../../../Services/Message.service");
const chat_gateway_1 = require("../Socket/chat.gateway");
const RoomDTO_1 = require("../../../DTO/Rooms/RoomDTO");
const Auth_service_1 = require("../../../Services/Auth.service");
const config_1 = require("@nestjs/config");
let ChatController = class ChatController {
    constructor(authService, config, jwt, messageService) {
        this.authService = authService;
        this.config = config;
        this.jwt = jwt;
        this.messageService = messageService;
    }
    newRoom(room, req, res) {
        chat_gateway_1.ChatGateway.createRoom(room);
        let url = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.redirect(url);
    }
    getMessage(roomId, res) {
        res.render("chats");
    }
    async deleteRoom(roomId, req, res) {
        let username = chat_gateway_1.ChatGateway.get(roomId).createdBy;
        let token = req.cookies.accessToken;
        if (token) {
            let decode = await this.authService.verifyToken(token);
            if (decode.username == username) {
            }
        }
    }
};
__decorate([
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("/creat_room"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoomDTO_1.RoomDto, Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "newRoom", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getMessage", null);
__decorate([
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_2.Req)()),
    __param(2, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteRoom", null);
ChatController = __decorate([
    (0, common_1.Controller)("/chat"),
    __metadata("design:paramtypes", [Auth_service_1.AuthService, config_1.ConfigService, jwt_1.JwtService, Message_service_1.MessageService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map