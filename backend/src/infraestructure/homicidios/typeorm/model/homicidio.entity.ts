import { Localidad } from 'src/infraestructure/localidades/typeorm/model/localidad.entity';
import { Persona } from 'src/infraestructure/personas/typeorm/model/persona.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'homicidios' })
export class Homicidio {
  @PrimaryColumn()
  id_hecho: number;

  @Column()
  federal: string;

  @Column()
  latitud_radio: number;

  @Column()
  longitud_radio: number;

  @Column()
  anio: number;

  @Column()
  mes: number;

  @Column()
  fecha_hecho: Date;

  @Column()
  hora_hecho: string;

  @Column()
  tipo_lugar: string;

  @Column()
  clase_arma: string;

  @ManyToOne(() => Localidad, (localidad) => localidad)
  @JoinColumn([
    { name: 'localidad_num', referencedColumnName: 'num' },
    { name: 'localidad_nombre', referencedColumnName: 'nombre' },
  ])
  localidad: Localidad;

  @ManyToMany(() => Persona)
  @JoinTable({
    name: 'victimas_homicidio',
    joinColumn: {
      name: 'id_hecho',
      referencedColumnName: 'id_hecho',
    },
    inverseJoinColumn: {
      name: 'persona_num',
      referencedColumnName: 'num',
    },
  })
  victimas: Persona[];

  @ManyToMany(() => Persona)
  @JoinTable({
    name: 'imputados_homicidio',
    joinColumn: {
      name: 'id_hecho',
      referencedColumnName: 'id_hecho',
    },
    inverseJoinColumn: {
      name: 'persona_num',
      referencedColumnName: 'num',
    },
  })
  imputados: Persona[];
}
