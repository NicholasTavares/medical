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
  tel_fixo: number;

  @Column()
  phone: number;

  @Column()
  cep: number;

  @Column()
  specialty: string[];
}
