import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop({ required: true })
  title: string;

  @Prop({
    required: true,
  })
  html: string;

  @Prop({ required: true })
  order: number;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
