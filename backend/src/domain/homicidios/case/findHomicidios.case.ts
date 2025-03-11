import { Inject, Injectable } from '@nestjs/common';
import { IFindHomicidios } from '../port/IFindHomicidios';
import { IHomicidioRepository } from '../port/IHomicidioRepository';
import { Homicidio } from '../model/homicidio.entity';

@Injectable()
export class FindHomicidios implements IFindHomicidios {
  constructor(
    @Inject(IHomicidioRepository)
    private readonly homicidioRepository: IHomicidioRepository,
  ) {}

  findAll(): Promise<Homicidio[]> {
    return this.homicidioRepository.findAll();
  }

  findByAnio(anio: number): Promise<Homicidio[]> {
    return this.homicidioRepository.findByAnio(anio);
  }

  findByProvincia(query: string): Promise<Homicidio[]> {
    if (!Number.isNaN(Number(query))) {
      return this.homicidioRepository.findByProvinciaNum(Number(query));
    }

    return this.homicidioRepository.findByProvinciaNombre(query);
  }

  findByLocalidad(
    num: string,
    nombre: string,
    departamento_num: number,
  ): Promise<Homicidio[]> {
    return this.homicidioRepository.findByLocalidad(
      num,
      nombre,
      departamento_num,
    );
  }

  findByLocalidadNombre(num: string): Promise<Homicidio[]> {
    return this.homicidioRepository.findByLocalidadNombre(num);
  }

  findByClaseArma(claseArma: string): Promise<Homicidio[]> {
    return this.homicidioRepository.findByClaseArma(claseArma);
  }

  findByFechaRango(fechaInicio: Date, fechaFin: Date): Promise<Homicidio[]> {
    return this.homicidioRepository.findByFechaRango(fechaInicio, fechaFin);
  }
}
