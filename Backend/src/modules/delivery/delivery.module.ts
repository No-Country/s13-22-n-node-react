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
import { OrderProductService } from '../orders/orderProducts.service';
import { ProductsService } from '../products/products.service';
import { OrderProductEntity } from '../orders/entities/order_products.entity';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Delivery, User, Product, OrderProductEntity, Category]),
    OrdersModule
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService, OrdersService, 
    {
      provide: 'ORDER_PRODUCT_SERVICE',
      useClass: OrderProductService,
    },
    {
      provide: 'PRODUCT_SERVICE',
      useClass: ProductsService,
    },
    {
      provide: 'CATEGORY_SERVICE',
      useClass: CategoryService,
    }
],
})
export class DeliveryModule {}
