import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './lesson.schema';
import { Course, CourseSchema } from 'src/courses/course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
