import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { UsersService } from 'src/users/users.service';
import { HashService } from 'src/users/hash.service';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d',
      },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, HashService, LocalStrategy],
})
export class AuthModule {}
