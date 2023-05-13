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
exports.Carts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Products_entity_1 = require("./Products.entity");
const ProductsCarts_entity_1 = require("./ProductsCarts.entity");
const ShippingBusiness_entity_1 = require("./ShippingBusiness.entity");
const ShippingBusinessCarts_entity_1 = require("./ShippingBusinessCarts.entity");
const Users_entity_1 = require("./Users.entity");
let Carts = class Carts extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Carts.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Products_entity_1.Products, () => ProductsCarts_entity_1.ProductsCarts),
    __metadata("design:type", Array)
], Carts.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => ShippingBusiness_entity_1.ShippingBusiness, () => ShippingBusinessCarts_entity_1.ShippingBusinessCarts),
    __metadata("design:type", Array)
], Carts.prototype, "shippingBusiness", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_entity_1.Users),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Carts.prototype, "idUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_entity_1.Users),
    __metadata("design:type", Users_entity_1.Users)
], Carts.prototype, "user", void 0);
Carts = __decorate([
    sequelize_typescript_1.Table
], Carts);
exports.Carts = Carts;
//# sourceMappingURL=Carts.entity.js.map