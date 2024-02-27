import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from './lesson.schema';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  create(createLessonDto: CreateLessonDto) {
    const lesson = new this.lessonModel(createLessonDto);
    return lesson.save();
  }

  async findOne(id: string) {
    const lesson = await this.lessonModel.findById(id);
    if (!lesson) {
      throw new NotFoundException();
    }
    return lesson;
  }

  async findByCourse(courseId: string) {
    const lessons: Lesson[] = await this.lessonModel
      .find({ course: courseId })
      .sort({ order: 1 });
    return lessons;
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    const { _id, ...lessonInfo } = updateLessonDto;
    const updatedLesson = await this.lessonModel.findByIdAndUpdate(
      id,
      lessonInfo,
      { new: true },
    );
    return updatedLesson;
  }

  async remove(id: string) {
    const deletedLesson = await this.lessonModel.findByIdAndDelete(id);
    if (!deletedLesson) {
      throw new NotFoundException();
    }
    return deletedLesson;
  }
}
