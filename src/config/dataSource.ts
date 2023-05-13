import "reflect-metadata";
import { Users } from "src/models/users.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  port:3306,
  host: "17.0.0.1",
  username: "root",
  password: "",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [__dirname + './**/*.entity.js'],
  subscribers: [],
});