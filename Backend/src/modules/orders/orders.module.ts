import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
import { DeliveryService } from '../delivery/delivery.service';
import { Delivery } from '../delivery/entities/delivery.entity';
import { Product } from '../products/entities/product.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User, Delivery, Product]),
    UsersModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, DeliveryService],
})
export class OrdersModule {}
