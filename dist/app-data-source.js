"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "c.huang",
    database: "splitdb_dev",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
});
