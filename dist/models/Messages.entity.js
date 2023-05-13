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
var Messages_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Rooms_entity_1 = require("./Rooms.entity");
const Participates_entity_1 = require("./Participates.entity");
let Messages = Messages_1 = class Messages extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Messages.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Messages.prototype, "message", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Messages.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Messages_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Messages.prototype, "idMessage", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Messages_1),
    __metadata("design:type", Messages)
], Messages.prototype, "mess", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Rooms_entity_1.Rooms),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Messages.prototype, "idRoom", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Rooms_entity_1.Rooms),
    __metadata("design:type", Rooms_entity_1.Rooms)
], Messages.prototype, "room", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Participates_entity_1.Participates),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Messages.prototype, "idParticipates", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Participates_entity_1.Participates),
    __metadata("design:type", Participates_entity_1.Participates)
], Messages.prototype, "participate", void 0);
Messages = Messages_1 = __decorate([
    sequelize_typescript_1.Table
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=Messages.entity.js.map