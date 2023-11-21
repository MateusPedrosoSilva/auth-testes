import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUser } from './dto/find-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Post('find-user')
  findUser(@Body() user: FindUser) {
    return this.userService.findUser(user.registrationNumber, user.password);
  }
}
