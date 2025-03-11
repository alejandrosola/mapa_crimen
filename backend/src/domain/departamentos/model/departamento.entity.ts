import { Provincia } from 'src/domain/provincias/model/provincia.entity';

export class Departamento {
  id: number;
  num: number;
  nombre: string;
  provincia: Provincia;
}
