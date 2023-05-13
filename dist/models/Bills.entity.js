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
exports.Bills = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Carts_entity_1 = require("./Carts.entity");
const Pays_entity_1 = require("./Pays.entity");
let Bills = class Bills extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Carts_entity_1.Carts),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "idCart", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Carts_entity_1.Carts),
    __metadata("design:type", Carts_entity_1.Carts)
], Bills.prototype, "cart", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Pays_entity_1.Pays),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "idPay", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Pays_entity_1.Pays),
    __metadata("design:type", Pays_entity_1.Pays)
], Bills.prototype, "pay", void 0);
Bills = __decorate([
    sequelize_typescript_1.Table
], Bills);
exports.Bills = Bills;
//# sourceMappingURL=Bills.entity.js.map