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
exports.Tags = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
const ProductsTags_entity_1 = require("./ProductsTags.entity");
let Tags = class Tags extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Tags.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tags.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Products_entity_1.Products, () => ProductsTags_entity_1.ProductsTags),
    __metadata("design:type", Array)
], Tags.prototype, "products", void 0);
Tags = __decorate([
    sequelize_typescript_1.Table
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=Tags.entity.js.map