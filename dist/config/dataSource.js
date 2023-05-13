"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    port: 3306,
    host: "17.0.0.1",
    username: "root",
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [__dirname + './**/*.entity.js'],
    subscribers: [],
});
//# sourceMappingURL=dataSource.js.map