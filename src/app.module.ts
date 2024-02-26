import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';
import { QuestionsModule } from './questions/questions.module';
import { TestsModule } from './tests/tests.module';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './guards/jwt.guard';
import { QualifyingsModule } from './qualifyings/qualifyings.module';

const globalGuard = {
  provide: APP_GUARD,
  useClass: JwtGuard,
};

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] }),
    MongooseModule.forRoot(process.env.DATABASE),
    UsersModule,
    AuthModule,
    JobsModule,
    QuestionsModule,
    TestsModule,
    LessonsModule,
    CoursesModule,
    QualifyingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, globalGuard],
})
export class AppModule {}
