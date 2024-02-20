import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { OrdersModule } from '../orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from '../delivery/entities/delivery.entity';
import { Order } from '../orders/entities/order.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { DeliveryService } from '../delivery/delivery.service';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Delivery, User, Product, Payment]),
    OrdersModule
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, DeliveryService],
})
export class PaymentsModule {}
