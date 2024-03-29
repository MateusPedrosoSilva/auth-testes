import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
    role: 'admin',
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    role: 'user',
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  // login(username: string, password: string) {
  async login(username: number, password: string) {
    const user = await this.validateCredentials(username, password);
    console.log(user);
    const payload = {
      sub: user.registrationNumber,
      username: user.userName,
      // role: user.role,
    };
    console.log(payload);
    return this.jwtService.sign(payload);
  }

  // validateCredentials(username: string, password: string) {
  async validateCredentials(username: number, password: string) {
    const user = await this.userService.findUser(username, password);
    // const user = users.find(
    //   (u) =>
    //     u.username === username && bcrypt.compareSync(password, u.password),
    // );
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user[0];
  }
}
