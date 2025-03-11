import { LocalidadPayload } from 'src/infraestructure/localidades/rest/payload/localidad.payload';
import { PersonaPayload } from 'src/infraestructure/personas/rest/payload/persona.payload';

export class HomicidioPayload {
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
  localidad: LocalidadPayload;
  victimas: PersonaPayload[];
  imputados: PersonaPayload[];
}
