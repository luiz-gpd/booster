import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AccessTokenDto } from './dto/access-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() credentials: LoginDto): Promise<AccessTokenDto> {
    return this.authService.login(credentials);
  }
}
