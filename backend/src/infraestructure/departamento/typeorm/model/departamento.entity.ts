import { Provincia } from 'src/infraestructure/provincias/typeorm/model/provincia.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'departamentos' })
export class Departamento {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  num: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Provincia, (provincia) => provincia)
  @JoinColumn({ name: 'provincia_num' })
  provincia: Provincia;
}
