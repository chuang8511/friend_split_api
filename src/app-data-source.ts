import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "c.huang",
    database: "splitdb_dev",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})