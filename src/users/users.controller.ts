import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Request() { user }) {
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('me')
  updateMe(@Request() { user }, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(user._id, updateUserDto);
  }

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }
}
