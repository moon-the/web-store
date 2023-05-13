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
exports.MetaData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Tokens_entity_1 = require("./Tokens.entity");
const OldToken_entity_1 = require("./OldToken.entity");
const Cookies_entity_1 = require("./Cookies.entity");
let MetaData = class MetaData extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MetaData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => OldToken_entity_1.OldToken),
    __metadata("design:type", Array)
], MetaData.prototype, "oldToken", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Tokens_entity_1.Token),
    __metadata("design:type", Array)
], MetaData.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Cookies_entity_1.Cookies),
    __metadata("design:type", Array)
], MetaData.prototype, "cookies", void 0);
MetaData = __decorate([
    sequelize_typescript_1.Table
], MetaData);
exports.MetaData = MetaData;
//# sourceMappingURL=metadata.entity.js.map