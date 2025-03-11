import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'provincias' })
export class Provincia {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  num: number;

  @Column()
  nombre: string;
}
