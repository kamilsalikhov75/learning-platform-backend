import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from './hash.service';
import { Role, User, UserDocument } from './user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async getUserByPhone(phone: string) {
    return this.usersModel
      .findOne({
        phone,
      })
      .exec();
  }

  async getUserById(id: string) {
    return this.usersModel.findById(id).exec();
  }

  async registerUser(createUserDto: CreateUserDto) {
    const createUser = new this.usersModel(createUserDto);
    const user = await this.getUserByPhone(createUser.phone);
    if (user) {
      throw new BadRequestException('Номер телефона уже используется');
    }

    createUser.password = await this.hashService.hashPassword(
      createUser.password,
    );

    createUser.role = Role.User;

    await createUser.save();

    const payload = {
      id: createUser.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
