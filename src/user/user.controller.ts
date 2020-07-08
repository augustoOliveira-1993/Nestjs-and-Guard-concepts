import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  @Get(':email')
  async getByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getByEmail(email);
  }
  @Post('/login')
  async create(@Body() user: User) {
    const result = this.userService.getByEmail(user.email);
    if (!result) throw new UnauthorizedException();

    if (result.password !== user.password) throw new UnauthorizedException();

    return uuidv4();
  }
}
