import { Departamento } from 'src/infraestructure/departamento/typeorm/model/departamento.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'localidades' })
@Unique(['num', 'nombre', 'departamento']) // Define la restricción UNIQUE
export class Localidad {
  @PrimaryColumn()
  id: number;

  @Column()
  num: string;

  @Column()
  nombre: string;

  @ManyToOne(() => Departamento, (departamento) => departamento)
  @JoinColumn({ name: 'departamento_num' })
  departamento: Departamento;
}
