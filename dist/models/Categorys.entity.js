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
exports.Categorys = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
const categorysProducts_entity_1 = require("./categorysProducts.entity");
const Intros_entity_1 = require("./Intros.entity");
let Categorys = class Categorys extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Categorys.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Categorys.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Products_entity_1.Products, () => categorysProducts_entity_1.CategorysProducts),
    __metadata("design:type", Array)
], Categorys.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Intros_entity_1.Intros),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Categorys.prototype, "idIntro", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Intros_entity_1.Intros),
    __metadata("design:type", Intros_entity_1.Intros)
], Categorys.prototype, "intro", void 0);
Categorys = __decorate([
    sequelize_typescript_1.Table
], Categorys);
exports.Categorys = Categorys;
//# sourceMappingURL=Categorys.entity.js.map