import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
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
      inject: [ConfigService]
    }),
    ProductsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
