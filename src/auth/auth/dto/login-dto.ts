import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'user1@user.com' })
  username: string;

  @ApiProperty({ default: '123456' })
  password: string;
}
