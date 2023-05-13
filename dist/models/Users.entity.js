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
exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const OldToken_entity_1 = require("./OldToken.entity");
const profiles_entity_1 = require("./profiles.entity");
const Tokens_entity_1 = require("./Tokens.entity");
const Roles_entity_1 = require("./Roles.entity");
const Pays_entity_1 = require("./Pays.entity");
const Rooms_entity_1 = require("./Rooms.entity");
const Participates_entity_1 = require("./Participates.entity");
const Carts_entity_1 = require("./Carts.entity");
let Users = class Users extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Length)({ min: 8 }),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Users.prototype, "activated", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => profiles_entity_1.Profile),
    __metadata("design:type", profiles_entity_1.Profile)
], Users.prototype, "profile", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Tokens_entity_1.Token),
    __metadata("design:type", Array)
], Users.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => OldToken_entity_1.OldToken),
    __metadata("design:type", Array)
], Users.prototype, "oldToken", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Carts_entity_1.Carts),
    __metadata("design:type", Array)
], Users.prototype, "cart", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.ForeignKey)(() => Roles_entity_1.Roles),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Users.prototype, "idRole", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Roles_entity_1.Roles),
    __metadata("design:type", Roles_entity_1.Roles)
], Users.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Pays_entity_1.Pays),
    __metadata("design:type", Array)
], Users.prototype, "pays", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Rooms_entity_1.Rooms, () => Participates_entity_1.Participates),
    __metadata("design:type", Array)
], Users.prototype, "rooms", void 0);
Users = __decorate([
    sequelize_typescript_1.Table
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.entity.js.map