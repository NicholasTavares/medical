import { IsNumberString, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  readonly name: string;

  @IsNumberString()
  readonly crm: number;

  @IsString()
  readonly tel_fixo: number;

  @IsString()
  readonly celular: number;

  @IsString()
  readonly cep: number;

  @IsString({ each: true })
  readonly specialty: string[];
}
