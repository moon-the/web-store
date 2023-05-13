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
exports.HomeShops = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Shops_enity_1 = require("./Shops.enity");
const Products_entity_1 = require("./Products.entity");
const HomeShopProducts_entity_1 = require("./HomeShopProducts.entity");
let HomeShops = class HomeShops extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], HomeShops.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Shops_enity_1.Shops),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], HomeShops.prototype, "idShop", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Shops_enity_1.Shops),
    __metadata("design:type", Shops_enity_1.Shops)
], HomeShops.prototype, "shop", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Products_entity_1.Products, () => HomeShopProducts_entity_1.HomeShopsProducts),
    __metadata("design:type", Array)
], HomeShops.prototype, "products", void 0);
HomeShops = __decorate([
    sequelize_typescript_1.Table
], HomeShops);
exports.HomeShops = HomeShops;
//# sourceMappingURL=HomeShop.entity.js.map