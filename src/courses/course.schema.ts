import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Job } from 'src/jobs/job.schema';
import { Lesson } from 'src/lessons/lesson.schema';
import { Test } from 'src/tests/test.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Job',
    required: true,
  })
  jobs: Job[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
  })
  test: Test;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
