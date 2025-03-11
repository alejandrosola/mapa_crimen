import { Localidad } from '../model/localidad.entity';

export interface IFindLocalidades {
  findAll(): Promise<Localidad[]>;
}
