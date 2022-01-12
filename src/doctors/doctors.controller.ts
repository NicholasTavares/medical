import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/createDoctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorsService) {}

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(id);
  }

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }
}
