import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { JwtGuard } from './jwt.guard';
import { Role } from './role.decorator';
import { RoleGuard } from './role.guard';
import { FindUser } from 'src/user/dto/find-user.dto';

@Controller()
@ApiTags('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // login(@Body() body: LoginDto) {
  login(@Body() body: FindUser) {
    return {
      token: this.authService.login(body.registrationNumber, body.password),
    };
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  @ApiBearerAuth()
  test(@Req() req) {
    return { user: req.user };
  }
}
