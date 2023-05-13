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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participates = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_entity_1 = require("./Users.entity");
const Rooms_entity_1 = require("./Rooms.entity");
const Messages_entity_1 = require("./Messages.entity");
let Participates = class Participates extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_entity_1.Users),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Participates.prototype, "idUsers", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Rooms_entity_1.Rooms),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Participates.prototype, "idRooms", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Messages_entity_1.Messages),
    __metadata("design:type", Array)
], Participates.prototype, "message", void 0);
Participates = __decorate([
    sequelize_typescript_1.Table
], Participates);
exports.Participates = Participates;
//# sourceMappingURL=Participates.entity.js.map