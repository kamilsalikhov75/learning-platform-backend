import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Job {
  @Prop({
    required: true,
    unique: true,
  })
  title: string;
}

export type JobDocument = HydratedDocument<Job>;

export const JobSchema = SchemaFactory.createForClass(Job);
