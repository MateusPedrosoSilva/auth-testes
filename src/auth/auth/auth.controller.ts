import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { Role } from './role.decorator';
import { RoleGuard } from './role.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return { name: 'Mateus Pedroso' };
  }
}
