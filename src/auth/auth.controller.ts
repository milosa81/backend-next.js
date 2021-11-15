import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './interfaces/login-result.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async getToken(@Body() loginInfo: LoginDto) {
    return await this.authService.performLogin(loginInfo);
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
}