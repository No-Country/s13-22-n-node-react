import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/config/strategies/google.strategy';
import { JwtStrategy } from 'src/config/strategies/jwt.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    JwtStrategy,
    {
      provide: 'AUTH_SERVICE', 
      useClass: AuthService
    }
  ],
})
export class AuthModule {}
