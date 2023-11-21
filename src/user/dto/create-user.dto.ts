import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'numero de matricula' })
  registrationNumber: number;

  @ApiProperty({ description: 'nome do usuario' })
  userName: string;

  @ApiProperty({ description: 'senha do usuario' })
  password: string;
}
