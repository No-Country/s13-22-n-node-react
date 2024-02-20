import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { dataSourceOptions } from './config/database/database.config';
import { OrdersModule } from './modules/orders/orders.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { CategoryModule } from './modules/category/category.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
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
    AuthModule,
    UsersModule,
    OrdersModule,
    DeliveryModule,
    MailerModule,
    CloudinaryModule,
    CategoryModule,
    PaymentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
