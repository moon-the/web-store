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
exports.Intros = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
const Categorys_entity_1 = require("./Categorys.entity");
let Intros = class Intros extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Intros.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Intros.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Intros.prototype, "describe", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Products_entity_1.Products),
    __metadata("design:type", Products_entity_1.Products)
], Intros.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Categorys_entity_1.Categorys),
    __metadata("design:type", Categorys_entity_1.Categorys)
], Intros.prototype, "category", void 0);
Intros = __decorate([
    sequelize_typescript_1.Table
], Intros);
exports.Intros = Intros;
//# sourceMappingURL=Intros.entity.js.map