import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { EmailService } from '../mailer/mailer.service';
import { MailerModule } from '../mailer/mailer.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
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
