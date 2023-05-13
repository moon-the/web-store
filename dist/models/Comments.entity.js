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
var Comments_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const votes_entity_1 = require("./votes.entity");
let Comments = Comments_1 = class Comments extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Comments.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Comments.prototype, "message", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Comments_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Comments.prototype, "idComment", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Comments_1),
    __metadata("design:type", Comments)
], Comments.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => votes_entity_1.Votes),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Comments.prototype, "idvote", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => votes_entity_1.Votes),
    __metadata("design:type", votes_entity_1.Votes)
], Comments.prototype, "vote", void 0);
Comments = Comments_1 = __decorate([
    sequelize_typescript_1.Table
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=Comments.entity.js.map