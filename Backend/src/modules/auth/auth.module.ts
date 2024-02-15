import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../../config/strategies/google.strategy';
import { JwtStrategy } from '../../config/strategies/jwt.strategy';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: 'JWT_EXPIRES_IN' },
      }),
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
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
  ],
})
export class AuthModule {}
