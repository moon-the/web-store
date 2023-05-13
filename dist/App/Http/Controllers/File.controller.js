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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const ActiveAccount_email_1 = require("../../Mail/ActiveAccount.email");
let FileController = class FileController {
    constructor(config) {
        this.config = config;
    }
    upload(file) {
        console.log(file);
    }
    test() {
        let acctive = new ActiveAccount_email_1.ActiveAccountEmail(this.config);
        acctive.create("vumanhhung311@gmail.com", "http://localhost:3000");
        acctive.sendEmail();
    }
};
__decorate([
    (0, common_1.Post)(""),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)("/test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileController.prototype, "test", null);
FileController = __decorate([
    (0, common_1.Controller)("upload"),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=File.controller.js.map