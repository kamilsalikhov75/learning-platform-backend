import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './question.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    const setOptions = new Set(createQuestionDto.options);
    createQuestionDto.options = [...setOptions];
    const question = new this.questionModel(createQuestionDto);
    return question.save();
  }

  async findOne(id: string) {
    const question = await this.questionModel.findById(id);
    if (!question) {
      throw new NotFoundException();
    }
    return question;
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    const updatedQuestion = await this.questionModel.findByIdAndUpdate(
      id,
      updateQuestionDto,
      { new: true },
    );
    return updatedQuestion;
  }

  async remove(id: string) {
    const deletedQuestion = await this.questionModel.findByIdAndDelete(id);
    if (!deletedQuestion) {
      throw new NotFoundException();
    }
    return deletedQuestion;
  }
}
