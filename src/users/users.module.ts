import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { HashService } from 'src/users/hash.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { Lesson, LessonSchema } from 'src/lessons/lesson.schema';
import { Course, CourseSchema } from 'src/courses/course.schema';
import {
  Qualifying,
  QualifyingSchema,
} from 'src/qualifyings/qualifying.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    MongooseModule.forFeature([
      { name: Qualifying.name, schema: QualifyingSchema },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d',
      },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    HashService,
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
})
export class UsersModule {}
