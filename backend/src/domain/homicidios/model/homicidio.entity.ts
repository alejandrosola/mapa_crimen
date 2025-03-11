import { Localidad } from 'src/domain/localidades/model/localidad.entity';
import { Persona } from 'src/domain/personas/model/persona.entity';

export class Homicidio {
  id_hecho: number;
  federal: string;
  latitud_radio: number;
  longitud_radio: number;
  anio: number;
  mes: number;
  fecha_hecho: Date;
  hora_hecho: string;
  tipo_lugar: string;
  clase_arma: string;
  localidad: Localidad;
  victimas: Persona[];
  imputados: Persona[];
}
