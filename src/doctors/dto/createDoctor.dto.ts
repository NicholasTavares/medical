import { ArrayMaxSize, ArrayMinSize, IsArray, IsString } from 'class-validator';
import { Specialty } from '../entities/specialty.entity';

export class CreateDoctorDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly crm: string;

  @IsString()
  readonly tel_fixo: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly cep: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(8)
  readonly specialties: Specialty[];
}
