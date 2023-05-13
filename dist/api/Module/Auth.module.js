"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAPIModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const Auth_service_1 = require("../../Services/Auth.service");
const Auth_api_1 = require("../auth/Auth.api");
let AuthAPIModule = class AuthAPIModule {
};
AuthAPIModule = __decorate([
    (0, common_1.Module)({
        controllers: [Auth_api_1.AuthAPI],
        providers: [Auth_service_1.AuthService, jwt_1.JwtService]
    })
], AuthAPIModule);
exports.AuthAPIModule = AuthAPIModule;
//# sourceMappingURL=Auth.module.js.map