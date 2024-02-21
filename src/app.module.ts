import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] }),
    MongooseModule.forRoot(process.env.DATABASE),
    UsersModule,
    AuthModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
