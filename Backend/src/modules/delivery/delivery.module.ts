import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { Delivery } from '../delivery/entities/delivery.entity';
import { OrdersService } from '../orders/orders.service';
import { Order } from '../orders/entities/order.entity';
import { User } from '../users/entities/user.entity';
import { OrdersModule } from '../orders/orders.module';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Delivery, User, Product]),
    OrdersModule
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService, OrdersService],
})
export class DeliveryModule {}
