"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./config/database.module");
const UserService_1 = require("./Services/UserService");
const search_module_1 = require("./search/search.module");
const File_module_1 = require("./App/Http/Controllers/Module/File.module");
const config_1 = require("@nestjs/config");
const Auth_module_1 = require("./App/Http/Controllers/Module/Auth.module");
const Auth_module_2 = require("./api/Module/Auth.module");
const Home_module_1 = require("./App/Http/Controllers/Module/Home.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [search_module_1.SearchModule, Home_module_1.HomeModule, Auth_module_1.AuthModule, Auth_module_2.AuthAPIModule, File_module_1.FileModule, config_1.ConfigModule.forRoot({
                isGlobal: true,
            }), database_module_1.DatabaseModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, UserService_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map