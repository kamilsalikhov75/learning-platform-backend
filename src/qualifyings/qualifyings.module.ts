import { Module } from '@nestjs/common';
import { QualifyingsService } from './qualifyings.service';
import { QualifyingsController } from './qualifyings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Qualifying, QualifyingSchema } from './qualifying.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Qualifying.name, schema: QualifyingSchema },
    ]),
  ],
  controllers: [QualifyingsController],
  providers: [QualifyingsService],
})
export class QualifyingsModule {}
