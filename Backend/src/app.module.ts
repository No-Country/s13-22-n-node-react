import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/entities/user.entity';
import { OrdersModule } from './modules/orders/orders.module';
import { Delivery } from './modules/delivery/entities/delivery.entity';
import { Order } from './modules/orders/entities/order.entity';
import { Payment } from './modules/payments/entities/payment.entity';
import { DeliveryModule } from './modules/delivery/delivery.module';

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
        port: configService.get('DB_PORT'),
        entities: [User, Order, Delivery, Payment],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'hungrytimemailer@gmail.com',
          pass: 'krjm pift qtqs tvos',
        },
      },
    }),
    ProductsModule,
    UsersModule,
    OrdersModule,
    DeliveryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
