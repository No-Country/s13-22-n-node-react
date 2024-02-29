import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
import { DeliveryService } from '../delivery/delivery.service';
import { Delivery } from '../delivery/entities/delivery.entity';
import { OrderProductService } from './orderProducts.service';
import { OrderProductEntity } from './entities/order_products.entity';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/entities/product.entity';
import { ProductsModule } from '../products/products.module';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderProductEntity, User, Delivery, Product, Category]),
    UsersModule,
    ProductsModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, DeliveryService, 
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
export class OrdersModule {}
