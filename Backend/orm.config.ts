import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
})

export default new DataSource({
    type: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    entities: ["src/**/*.entity.ts"],
    migrations: ["src/config/database/migrations/*.ts"],
}) 