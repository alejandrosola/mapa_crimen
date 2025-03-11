import { Localidad } from '../model/localidad.entity';

export interface ILocalidadRepository {
  findAll(): Promise<Localidad[]>;
}

export const ILocalidadRepository = Symbol('ILocalidadRepository');
