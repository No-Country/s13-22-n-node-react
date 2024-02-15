import { ConfigModule } from '@nestjs/config';
import { Role } from 'src/modules/auth/entities/role.entity';
import { Delivery } from 'src/modules/delivery/entities/delivery.entity';
import { Order } from 'src/modules/orders/entities/order.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
})

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        ssl: true,
        entities: [User, Role, Product, Order, Delivery],
        synchronize: true,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;