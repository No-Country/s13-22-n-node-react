import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  
  constructor(){}

  async register(registerDto: RegisterDto) {
    return registerDto;
  }

  async login(loginDto: LoginDto) {
    return `This action returns all auth`;
  }

  async validateUser(){

  }

}
