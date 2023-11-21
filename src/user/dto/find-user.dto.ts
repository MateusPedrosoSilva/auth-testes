import { ApiProperty } from '@nestjs/swagger';

export class FindUser {
  @ApiProperty({ description: 'numero de matricula' })
  registrationNumber: number;

  @ApiProperty({ description: 'senha do usuario' })
  password: string;
}
