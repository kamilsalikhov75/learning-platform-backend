import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Job {
  @Prop({
    required: true,
    unique: true,
  })
  title: string;
}

export type JobDocument = Job & Document;

export const JobSchema = SchemaFactory.createForClass(Job);
