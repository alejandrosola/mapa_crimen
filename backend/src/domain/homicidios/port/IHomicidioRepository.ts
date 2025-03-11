import { Homicidio } from '../model/homicidio.entity';

export interface IHomicidioRepository {
  findAll(): Promise<Homicidio[]>;
  findByAnio(anio: number): Promise<Homicidio[]>;
  findByLocalidadNombre(nombre: string): Promise<Homicidio[]>;
  findByLocalidad(
    num: string,
    nombre: string,
    departamento_num: number,
  ): Promise<Homicidio[]>;
  findByProvinciaNombre(nombre: string): Promise<Homicidio[]>;
  findByProvinciaNum(num: number): Promise<Homicidio[]>;
  findByClaseArma(claseArma: string): Promise<Homicidio[]>;
  findByFechaRango(fechaInicio: Date, fechaFin: Date): Promise<Homicidio[]>;
}

export const IHomicidioRepository = Symbol('IHomicidioRepository');
