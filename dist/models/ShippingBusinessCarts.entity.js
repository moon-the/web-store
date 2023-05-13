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
exports.ShippingBusinessCarts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Carts_entity_1 = require("./Carts.entity");
const ShippingBusiness_entity_1 = require("./ShippingBusiness.entity");
let ShippingBusinessCarts = class ShippingBusinessCarts extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Carts_entity_1.Carts),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ShippingBusinessCarts.prototype, "idCart", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ShippingBusiness_entity_1.ShippingBusiness),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ShippingBusinessCarts.prototype, "idShippingBusiness", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ShippingBusinessCarts.prototype, "state", void 0);
ShippingBusinessCarts = __decorate([
    sequelize_typescript_1.Table
], ShippingBusinessCarts);
exports.ShippingBusinessCarts = ShippingBusinessCarts;
//# sourceMappingURL=ShippingBusinessCarts.entity.js.map