import { ProvinciaPayload } from 'src/infraestructure/provincias/rest/payload/provincia.payload';

export class DepartamentoPayload {
  id: number;
  num: number;
  nombre: string;
  provincia: ProvinciaPayload;
}
