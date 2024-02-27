import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

import { Role } from '../../../modules/auth/entities/role.entity';
import { Delivery } from '../../../modules/delivery/entities/delivery.entity';
import { Order } from '../../../modules/orders/entities/order.entity';
import { Category } from '../../../modules/category/entities/category.entity';
import { Product } from '../../../modules/products/entities/product.entity';
import { User } from '../../../modules/users/entities/user.entity';
import { Image } from '../../../modules/products/entities/image.entity';
import { Payment } from '../../../modules/payments/entities/payment.entity';

ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
})

const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        entities: [User, Role, Order, Product, Category, Delivery, Image, Payment],
        ssl: true,
        synchronize: true,
}

export default dataSourceOptions as TypeOrmModuleOptions
