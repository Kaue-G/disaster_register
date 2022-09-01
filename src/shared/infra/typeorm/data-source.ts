import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = parseInt(process.env.DB_PORT);

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    migrations: [`./src/shared/infra/typeorm/migrations/*.{ts,js}`],
    entities: ['./src/modules/**/entities/*.{ts,js}']
});
