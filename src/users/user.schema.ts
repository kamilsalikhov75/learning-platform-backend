import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Job } from 'src/jobs/job.schema';

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
  @Prop()
  role: Role;
  @Prop({
    required: true,
  })
  sex: Sex;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true })
  job: Job;
}

export const UserSchema = SchemaFactory.createForClass(User);
