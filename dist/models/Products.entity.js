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
exports.Products = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Shops_enity_1 = require("./Shops.enity");
const ShopsProducts_entity_1 = require("./ShopsProducts.entity");
const Categorys_entity_1 = require("./Categorys.entity");
const categorysProducts_entity_1 = require("./categorysProducts.entity");
const Intros_entity_1 = require("./Intros.entity");
const ExportPrices_entity_1 = require("./ExportPrices.entity");
const ImportPrices_entity_1 = require("./ImportPrices.entity");
const Pins_entity_1 = require("./Pins.entity");
const PinsProducts_entity_1 = require("./PinsProducts.entity");
const Files_entity_1 = require("./Files.entity");
const ProductsFiles_entity_1 = require("./ProductsFiles.entity");
const Carts_entity_1 = require("./Carts.entity");
const ProductsCarts_entity_1 = require("./ProductsCarts.entity");
const Tags_entity_1 = require("./Tags.entity");
const ProductsTags_entity_1 = require("./ProductsTags.entity");
const Untis_entity_1 = require("./Untis.entity");
const HomeShop_entity_1 = require("./HomeShop.entity");
const HomeShopProducts_entity_1 = require("./HomeShopProducts.entity");
let Products = class Products extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Shops_enity_1.Shops, () => ShopsProducts_entity_1.ShopsProducts),
    __metadata("design:type", Array)
], Products.prototype, "shops", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Categorys_entity_1.Categorys, () => categorysProducts_entity_1.CategorysProducts),
    __metadata("design:type", Array)
], Products.prototype, "categorys", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Intros_entity_1.Intros),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Products.prototype, "idIntro", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Intros_entity_1.Intros),
    __metadata("design:type", Intros_entity_1.Intros)
], Products.prototype, "intro", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Untis_entity_1.Untis),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Products.prototype, "idUntis", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Untis_entity_1.Untis),
    __metadata("design:type", Untis_entity_1.Untis)
], Products.prototype, "untis", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ExportPrices_entity_1.ExportPrices),
    __metadata("design:type", Array)
], Products.prototype, "exportPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ImportPrices_entity_1.ImportPrices),
    __metadata("design:type", Array)
], Products.prototype, "importPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Pins_entity_1.Pins, () => PinsProducts_entity_1.PinsProducts),
    __metadata("design:type", Array)
], Products.prototype, "pins", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Files_entity_1.Files, () => ProductsFiles_entity_1.ProductsFiles),
    __metadata("design:type", Array)
], Products.prototype, "files", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Carts_entity_1.Carts, () => ProductsCarts_entity_1.ProductsCarts),
    __metadata("design:type", Array)
], Products.prototype, "carts", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Tags_entity_1.Tags, () => ProductsTags_entity_1.ProductsTags),
    __metadata("design:type", Array)
], Products.prototype, "tags", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => HomeShop_entity_1.HomeShops, () => HomeShopProducts_entity_1.HomeShopsProducts),
    __metadata("design:type", Array)
], Products.prototype, "homeShops", void 0);
Products = __decorate([
    sequelize_typescript_1.Table
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.entity.js.map