import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [DoctorsModule],
  controllers: [AppController, DoctorsController],
  providers: [AppService],
})
export class AppModule {}
