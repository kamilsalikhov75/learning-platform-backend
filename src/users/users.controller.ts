import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Request() { user }) {
    return user;
  }
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }
}
