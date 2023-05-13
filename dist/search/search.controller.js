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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const search_service_1 = require("./search.service");
const create_search_dto_1 = require("./dto/create-search.dto");
const enums_1 = require("@nestjs/common/enums");
const decorators_1 = require("@nestjs/common/decorators");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    create(createSearchDto) {
        return this.searchService.create(createSearchDto);
    }
    findOne(key, res) {
        if (key.length < 1) {
            res.status(enums_1.HttpStatus.NOT_FOUND);
            res.json({ "error": "không có" });
            return res.send;
        }
        return res.json(key);
        return this.searchService.findOne(+key);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_search_dto_1.CreateSearchDto]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, decorators_1.Query)('k')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "findOne", null);
SearchController = __decorate([
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map