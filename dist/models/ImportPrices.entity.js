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
exports.ImportPrices = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
let ImportPrices = class ImportPrices extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ImportPrices.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ImportPrices.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_entity_1.Products),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ImportPrices.prototype, "idProduct", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Products_entity_1.Products),
    __metadata("design:type", Products_entity_1.Products)
], ImportPrices.prototype, "product", void 0);
ImportPrices = __decorate([
    sequelize_typescript_1.Table
], ImportPrices);
exports.ImportPrices = ImportPrices;
//# sourceMappingURL=ImportPrices.entity.js.map