import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './create-job.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/user.schema';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Public()
  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @Roles([Role.Admin])
  @Post()
  addJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.addJob(createJobDto);
  }
}
