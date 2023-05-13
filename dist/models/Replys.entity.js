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
exports.Replys = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const comments_entity_1 = require("./comments.entity");
const Shops_enity_1 = require("./Shops.enity");
let Replys = class Replys extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Replys.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Replys.prototype, "message", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => comments_entity_1.Comments),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Replys.prototype, "idComment", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => comments_entity_1.Comments),
    __metadata("design:type", comments_entity_1.Comments)
], Replys.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Shops_enity_1.Shops),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Replys.prototype, "idShop", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Shops_enity_1.Shops),
    __metadata("design:type", Shops_enity_1.Shops)
], Replys.prototype, "shop", void 0);
Replys = __decorate([
    sequelize_typescript_1.Table
], Replys);
exports.Replys = Replys;
//# sourceMappingURL=Replys.entity.js.map