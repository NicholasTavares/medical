import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/createDoctor.dto';
import { CreateSpecialtyDto } from './dto/createSpecialty.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorsService) {}

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(id);
  } */

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.doctorService.remove(id);
  }

  @Post('specialty')
  createSpecialty(@Body() createSpecialtyDto: CreateSpecialtyDto) {
    return this.doctorService.createSpecialty(createSpecialtyDto);
  }

  @Get('specialty')
  findAllSpecialties() {
    return this.doctorService.findAllSpecialties();
  }
}
