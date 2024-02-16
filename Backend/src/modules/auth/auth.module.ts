import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../../config/strategies/google.strategy';
import { JwtStrategy } from '../../config/strategies/jwt.strategy';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { EmailService } from '../mailer/mailer.service';
import { jwtModuleOptions } from 'src/config/jwt/jwt.config';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(jwtModuleOptions),
    PassportModule.register({ 
      defaultStrategy: 'jwt', session: false 
    }),
  ],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    JwtStrategy,
    {
      provide: 'AUTH_SERVICE', 
      useClass: AuthService
    }, 
    {
      provide: 'USER_SERVICE', 
      useClass: UsersService
    },
    {
      provide: 'EMAIL_SERVICE',
      useClass: EmailService
    }
  ],
})
export class AuthModule {}
