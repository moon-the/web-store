"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookiePaser = require("cookie-parser");
const path_1 = require("path");
const Auth_service_1 = require("./Services/Auth.service");
async function bootstrap() {
    Auth_service_1.AuthService.generateKey();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookiePaser());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '/src/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', '/src/views'));
    app.setViewEngine("ejs");
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map