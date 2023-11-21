import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectDataSource('local-db') private readonly localDb: DataSource,
  ) {}

  async createUser(user: CreateUserDto) {
    try {
      await this.localDb
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          registrationNumber: user.registrationNumber,
          userName: user.userName,
          password: user.password,
        })
        .execute();
      return 'usuario criado com sucesso';
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
