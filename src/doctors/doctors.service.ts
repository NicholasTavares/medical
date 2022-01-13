import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/createDoctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService extends TypeOrmQueryService<Doctor> {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {
    super(doctorRepository, { useSoftDelete: true });
  }

  async findAll() {
    return this.doctorRepository.find();
  }

  async findOne(id: string) {
    const doctor = await this.doctorRepository.findOne(id);

    if (!doctor) {
      throw new NotFoundException(`Doctor ID of ${id} not found`);
    }

    return doctor;
  }

  create(createDoctorDto: CreateDoctorDto) {
    console.log(createDoctorDto);
    const doctor = this.doctorRepository.create(createDoctorDto);

    return this.doctorRepository.save(doctor);
  }

  async remove(id: string) {
    const doctor = await this.doctorRepository.softDelete(id);

    if (!doctor.affected) {
      throw new NotFoundException(`Doctor ID of ${id} not found`);
    }
  }
}
