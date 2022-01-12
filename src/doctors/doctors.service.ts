import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/createDoctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

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
    const doctor = this.doctorRepository.create(createDoctorDto);

    return this.doctorRepository.save(doctor);
  }
}
