import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  crm: number;

  @Column()
  tel_fixo: string;

  @Column()
  celular: string;

  @Column()
  cep: number;

  @Column()
  specialty: string[];
}
