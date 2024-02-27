import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { EmailService } from '../mailer/mailer.service';
import { Order } from '../orders/entities/order.entity';
import { Payment } from '../payments/entities/payment.entity';
import { Delivery } from '../delivery/entities/delivery.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Order, Payment, Delivery]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService, 
    {
      provide: 'EMAIL_SERVICE',
      useClass: EmailService
    }
  ],
})
export class UsersModule {}
