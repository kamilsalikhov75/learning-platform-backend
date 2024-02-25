import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './create-job.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/user.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jobs')
@Roles([Role.Admin])
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @Post()
  addJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.addJob(createJobDto);
  }
}
