import { Departamento } from 'src/domain/departamentos/model/departamento.entity';

export class Localidad {
  id: number;
  num: string;
  nombre: string;
  departamento: Departamento;
}
