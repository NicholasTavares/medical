import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';

@Module({
  imports: [],
  controllers: [AppController, DoctorsController],
  providers: [AppService],
})
export class AppModule {}
