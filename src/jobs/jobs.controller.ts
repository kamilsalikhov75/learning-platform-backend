import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  addJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.addJob(createJobDto);
  }
}
