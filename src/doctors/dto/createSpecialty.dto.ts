import { IsString } from 'class-validator';

export class CreateSpecialtyDto {
  @IsString()
  readonly specialty: string;
}
