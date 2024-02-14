import { ConfigModule } from "@nestjs/config"

ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
})

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;