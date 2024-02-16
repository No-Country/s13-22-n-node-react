import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Req } from '@nestjs/common';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../../common/constants';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET
    });
  }

  async validate(payload: any) {

    const token = await this.jwtService.signAsync(
      { userId: payload.id, role: payload.role },
      {
        secret: JWT_SECRET,
        expiresIn: JWT_EXPIRES_IN,
      },
    );

    return {
      token: token,
      userId: payload.id,
      role: payload.role,
    };
  }
}