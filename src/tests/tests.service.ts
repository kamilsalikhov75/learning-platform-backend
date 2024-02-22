import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from './test.schema';
import { Model } from 'mongoose';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  create(createTestDto: CreateTestDto) {
    const setQuestions = new Set(createTestDto.questions);
    createTestDto.questions = [...setQuestions];
    const test = new this.testModel(createTestDto);
    return test.save();
  }

  async findOne(id: string) {
    const test = await this.testModel.findById(id).populate('questions');
    if (!test) {
      throw new NotFoundException();
    }
    return test;
  }

  async update(id: string, updateTestDto: UpdateTestDto) {
    const updatedTest = await this.testModel.findByIdAndUpdate(
      id,
      updateTestDto,
      { new: true },
    );
    return updatedTest;
  }

  async remove(id: string) {
    const deletedTest = await this.testModel.findByIdAndDelete(id);
    return deletedTest;
  }
}
