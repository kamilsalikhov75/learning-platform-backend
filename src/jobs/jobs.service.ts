import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './create-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job, JobDocument } from './job.schema';
import { Model } from 'mongoose';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async getJobs() {
    return this.jobModel.find().exec();
  }

  async addJob(createJobDto: CreateJobDto) {
    const createJob = new this.jobModel(createJobDto);

    await createJob.save();
  }
}
