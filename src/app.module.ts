import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [
    DoctorsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'medical',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, DoctorsController],
  providers: [AppService],
})
export class AppModule {}
