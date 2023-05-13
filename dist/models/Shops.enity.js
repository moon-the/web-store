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
exports.Shops = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_entity_1 = require("./Users.entity");
const HomeShop_entity_1 = require("./HomeShop.entity");
const Products_entity_1 = require("./Products.entity");
const ShopsProducts_entity_1 = require("./ShopsProducts.entity");
let Shops = class Shops extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Shops.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Shops.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Shops.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Shops.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_entity_1.Users),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Shops.prototype, "idUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_entity_1.Users),
    __metadata("design:type", Users_entity_1.Users)
], Shops.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => HomeShop_entity_1.HomeShops),
    __metadata("design:type", Array)
], Shops.prototype, "homeShops", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Products_entity_1.Products, () => ShopsProducts_entity_1.ShopsProducts),
    __metadata("design:type", Array)
], Shops.prototype, "products", void 0);
Shops = __decorate([
    sequelize_typescript_1.Table
], Shops);
exports.Shops = Shops;
//# sourceMappingURL=Shops.enity.js.map