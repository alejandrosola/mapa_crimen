import { Homicidio } from '../model/homicidio.entity';

export interface IFindHomicidios {
  findAll(): Promise<Homicidio[]>;
  findByAnio(anio: number): Promise<Homicidio[]>;
  findByLocalidadNombre(nombre: string): Promise<Homicidio[]>;
  findByLocalidad(
    num: string,
    nombre: string,
    departamento_num: number,
  ): Promise<Homicidio[]>;
  findByProvincia(query: string): Promise<Homicidio[]>;
  findByClaseArma(claseArma: string): Promise<Homicidio[]>;
  findByFechaRango(fechaInicio: Date, fechaFin: Date): Promise<Homicidio[]>;
}
