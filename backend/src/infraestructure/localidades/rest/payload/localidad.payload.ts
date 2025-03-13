import { DepartamentoPayload } from 'src/infraestructure/departamento/rest/payload/departamento.payload';

export class LocalidadPayload {
  id: number;
  num: string;
  nombre: string;
  departamento: DepartamentoPayload | null;
}
