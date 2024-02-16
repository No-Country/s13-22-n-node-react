import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from '../../config/strategies/jwt.strategy';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {

  
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    private readonly jwtStrategy: JwtStrategy
  ){}

  async register(registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }

  async login(user: LoginDto) {
   
    const verifyUser = await this.userService.findByEmail(user.email);
    
    
    if (!verifyUser)
      throw new UnauthorizedException(`Wrong document or password`);

      if (user.password) {

        const isMatch = await bcrypt.compare(user.password, verifyUser.password);
    
        if (!isMatch) throw new UnauthorizedException(`Wrong email or password`);

        const jwtBody = await this.jwtStrategy.validate(verifyUser);

        return jwtBody;

      }

    const jwtBody = await this.jwtStrategy.validate(verifyUser);
    
    return jwtBody;

  }

  async validateUser(email: string, profile: CreateUserDto){
    
    const user = await this.userService.findByGoogleEmail(email);

    if(user) return user;

    const newUser = await this.userService.create(profile);

    return newUser
  }

}
