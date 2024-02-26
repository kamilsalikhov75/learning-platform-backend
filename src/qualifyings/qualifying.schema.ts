import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type QualifyingDocument = HydratedDocument<Qualifying>;

@Schema()
export class Qualifying {
  @Prop({ required: true })
  title: string;
}

export const QualifyingSchema = SchemaFactory.createForClass(Qualifying);
