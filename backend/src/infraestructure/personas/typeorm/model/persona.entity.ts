import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'personas' })
export class Persona {
  @PrimaryColumn()
  id: number;

  @Column()
  num: number;

  @Column()
  tipo: string;
}
