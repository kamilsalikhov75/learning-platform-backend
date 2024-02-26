import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQualifyingDto } from './dto/create-qualifying.dto';
import { UpdateQualifyingDto } from './dto/update-qualifying.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Qualifying, QualifyingDocument } from './qualifying.schema';
import { Model } from 'mongoose';

@Injectable()
export class QualifyingsService {
  constructor(
    @InjectModel(Qualifying.name)
    private qualifyingModel: Model<QualifyingDocument>,
  ) {}

  create(createQualifyingDto: CreateQualifyingDto) {
    const qualifying = new this.qualifyingModel(createQualifyingDto);
    return qualifying.save();
  }

  async findOne(id: string) {
    const qualifying = await this.qualifyingModel.findById(id);
    if (!qualifying) {
      throw new NotFoundException();
    }
    return qualifying;
  }

  async update(id: string, updateQualifyingDto: UpdateQualifyingDto) {
    const updatedQualifying = await this.qualifyingModel.findByIdAndUpdate(
      id,
      updateQualifyingDto,
      { new: true },
    );
    return updatedQualifying;
  }

  async remove(id: string) {
    const deletedQualifying = await this.qualifyingModel.findByIdAndDelete(id);
    if (!deletedQualifying) {
      throw new NotFoundException();
    }
    return deletedQualifying;
  }
}
