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
exports.ProductsCarts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
const Carts_entity_1 = require("./Carts.entity");
const Sales_entity_1 = require("./Sales.entity");
let ProductsCarts = class ProductsCarts extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_entity_1.Products),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProductsCarts.prototype, "idProduct", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Carts_entity_1.Carts),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProductsCarts.prototype, "idCart", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Sales_entity_1.Sales),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProductsCarts.prototype, "idSale", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Sales_entity_1.Sales),
    __metadata("design:type", Sales_entity_1.Sales)
], ProductsCarts.prototype, "sale", void 0);
ProductsCarts = __decorate([
    sequelize_typescript_1.Table
], ProductsCarts);
exports.ProductsCarts = ProductsCarts;
//# sourceMappingURL=ProductsCarts.entity.js.map