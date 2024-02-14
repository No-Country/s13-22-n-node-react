import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { dataSourceOptions } from './config/database/database.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      database: configService.get('DB_NAME'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASS'),
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      entities: [],
      synchronize: true,
    }),
<<<<<<< HEAD
    inject: [ConfigService]
  }),
  ProductsModule,],
=======
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductsModule,
    AuthModule,
    UsersModule,
  ],
>>>>>>> 9682994 (Setting the authentication and authorization through JWT and Google OAuth 2.0, Adding the Exception handler using a filter)
  controllers: [],
  providers: [],
})
export class AppModule {}
