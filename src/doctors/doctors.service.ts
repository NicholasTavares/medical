import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/createDoctor.dto';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';
import { CreateSpecialtyDto } from './dto/createSpecialty.dto';

@Injectable()
export class DoctorsService extends TypeOrmQueryService<Doctor> {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Specialty)
    private readonly specialtyRepository: Repository<Specialty>,
  ) {
    super(doctorRepository, { useSoftDelete: true });
  }

  findAll() {
    return this.doctorRepository.find();
  }

  async findOne(id: string) {
    console.log('tô aqui', id);
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

  async remove(id: string) {
    const doctor = await this.doctorRepository.softDelete(id);

    if (!doctor.affected) {
      throw new NotFoundException(`Doctor ID of ${id} not found`);
    }
  }

  createSpecialty(createSpecialtyDto: CreateSpecialtyDto) {
    const specialty = this.specialtyRepository.create(createSpecialtyDto);

    return this.specialtyRepository.save(specialty);
  }

  async findAllSpecialties() {
    console.log('cheguei aqui');
    return this.specialtyRepository.find();
  }
}
