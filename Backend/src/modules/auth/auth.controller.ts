import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Inject, Res, Req, Request } from '@nestjs/common';
import { Response,  } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { GoogleAuthGuard } from 'src/common/guards/google.guard';
import passport from 'passport';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {}
  
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @UseGuards(JwtAuthGuard)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin(){
    return `Google Authentication`;
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  googleLoginCallback(@Request() req: Request, @Res() res: Response) {
    // const googleToken = req.user.accessToken;
    // const googleRefreshToken = req.user.refreshToken;

    

  //  console.log(req)

    res.redirect('http://localhost:3000/auth/profile');
  }

  
}
