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
exports.ProductsFiles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Files_entity_1 = require("./Files.entity");
const Products_entity_1 = require("./Products.entity");
let ProductsFiles = class ProductsFiles extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Files_entity_1.Files),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProductsFiles.prototype, "idFile", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_entity_1.Products),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProductsFiles.prototype, "idproduct", void 0);
ProductsFiles = __decorate([
    sequelize_typescript_1.Table
], ProductsFiles);
exports.ProductsFiles = ProductsFiles;
//# sourceMappingURL=ProductsFiles.entity.js.map