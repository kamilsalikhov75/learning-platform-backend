import { Job } from 'src/jobs/job.entity';
import { Role, Sex } from './user.schema';

export class User {
  firstName: string;
  lastName: string;
  surName: string;
  phone: string;
  password: string;
  role: Role;
  sex: Sex;
  job: Job;
}
