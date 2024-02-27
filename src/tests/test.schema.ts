import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Question } from 'src/questions/question.schema';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @Prop({ required: true })
  course: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Question',
  })
  questions: Question[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
