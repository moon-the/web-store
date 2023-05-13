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
exports.Token = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_entity_1 = require("./Users.entity");
const metadata_entity_1 = require("./metadata.entity");
let Token = class Token extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Token.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Token.prototype, "refreshToken", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_entity_1.Users),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Token.prototype, "idUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_entity_1.Users),
    __metadata("design:type", Users_entity_1.Users)
], Token.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => metadata_entity_1.MetaData),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Token.prototype, "idMetaData", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => metadata_entity_1.MetaData),
    __metadata("design:type", metadata_entity_1.MetaData)
], Token.prototype, "metaData", void 0);
Token = __decorate([
    sequelize_typescript_1.Table
], Token);
exports.Token = Token;
//# sourceMappingURL=Tokens.entity.js.map