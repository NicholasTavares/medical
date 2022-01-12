import { IsNumberString, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  readonly name: string;

  @IsNumberString()
  readonly crm: number;

  @IsString()
  readonly tel_fixo: string;

  @IsString()
  readonly celular: string;

  @IsString()
  readonly cep: number;

  @IsString({ each: true })
  readonly specialty: string[];
}
