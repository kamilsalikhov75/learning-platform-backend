import { Controller, Get, Post, Body, Request, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { Public } from 'src/decorators/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(@Request() { user }) {
    return user;
  }

  @Put('me')
  updateMe(@Request() { user }, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(user._id, updateUserDto);
  }

  @Public()
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }
}
