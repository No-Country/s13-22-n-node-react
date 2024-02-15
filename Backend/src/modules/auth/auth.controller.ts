import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Inject, Res, Req, Request, UseFilters } from '@nestjs/common';
import { Response,  } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { GoogleAuthGuard } from 'src/common/guards/google.guard';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';

@UseFilters(AllExceptionFilter)
@Controller('api/v1/auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {}
  
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto)
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
  
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin(){
    return { msg: 'OK' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleLoginCallback(@Request() req: any, @Res({ passthrough: true }) res: Response) {

    const jwt = await this.authService.login(req.user);

    res.cookie('authorization', jwt.token, {
      expires: new Date(Date.now() + 60000 * 60)
    })

    res.redirect(`http://localhost:3000/home/${jwt.userId}`)

  }

  
}
