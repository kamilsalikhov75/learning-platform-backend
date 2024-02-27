import { Schema, SchemaFactory, Prop, raw } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { Job } from 'src/jobs/job.schema';
import { Lesson } from 'src/lessons/lesson.schema';
import { Qualifying } from 'src/qualifyings/qualifying.schema';
import { Question } from 'src/questions/question.schema';
import { Test } from 'src/tests/test.schema';

export enum Role {
  Default = 'default',
  Admin = 'admin',
  Supervisor = 'supervisor',
}

export enum Sex {
  Male = 'male',
  Female = 'female',
}

export type UserDocument = User & Document;

@Schema({ _id: false })
export class Answer {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  })
  question: Question;

  @Prop({ required: true })
  answer: string;
}

@Schema({ _id: false })
export class FinishedTest {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true })
  test: Test;

  @Prop()
  correctAnswersCount: number;

  @Prop({
    type: [Answer],
    required: true,
  })
  answers: [Answer];
}

@Schema()
export class User {
  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: true,
  })
  surName: string;

  @Prop({
    required: true,
    unique: true,
  })
  phone: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Lesson',
    required: true,
  })
  finishedLessons: Lesson[];

  @Prop({
    type: [FinishedTest],
    required: true,
  })
  finishedTests: [FinishedTest];

  @Prop()
  role: Role;

  @Prop({
    required: true,
  })
  sex: Sex;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true })
  job: Job;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Qualifying',
  })
  qualifying: Qualifying;
}

export const UserSchema = SchemaFactory.createForClass(User);
