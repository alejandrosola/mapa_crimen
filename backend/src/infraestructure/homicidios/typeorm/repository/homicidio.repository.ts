import { Injectable } from '@nestjs/common';
import { Homicidio } from '../model/homicidio.entity';
import { Homicidio as DomainHomicidio } from 'src/domain/homicidios/model/homicidio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { HomicidioTypeORMMapper } from '../mapper/homicidio.typeorm.mapper';
import { IHomicidioRepository } from 'src/domain/homicidios/port/IHomicidioRepository';

@Injectable()
export class HomicidioRepository implements IHomicidioRepository {
  constructor(
    @InjectRepository(Homicidio)
    private readonly homicidioRepository: Repository<Homicidio>,
  ) {}

  relations = ['localidad.departamento.provincia', 'victimas', 'imputados'];

  async findAll(): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByAnio(anio: number): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.findBy({
      anio: anio,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByLocalidad(
    num: string,
    nombre: string,
    departamento_num: number,
  ): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      where: {
        localidad: {
          num,
          nombre,
          departamento: { num: departamento_num },
        },
      },
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByLocalidadNombre(nombre: string): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      where: {
        localidad: {
          nombre: nombre,
        },
      },
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByProvinciaNombre(nombre: string): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      where: {
        localidad: {
          departamento: {
            provincia: {
              nombre: nombre,
            },
          },
        },
      },
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByProvinciaNum(num: number): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      where: {
        localidad: {
          departamento: {
            provincia: {
              num: num,
            },
          },
        },
      },
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByClaseArma(claseArma: string): Promise<DomainHomicidio[]> {
    const someHomicidios = await this.homicidioRepository.find({
      where: {
        clase_arma: claseArma,
      },
      relations: this.relations,
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }

  async findByFechaRango(
    startDate: Date,
    endDate: Date,
  ): Promise<DomainHomicidio[]> {
    const adjustedStartDate = new Date(
      startDate.getTime() + 3 * 60 * 60 * 1000,
    );
    const adjustedEndDate = new Date(endDate.getTime() + 3 * 60 * 60 * 1000);

    const someHomicidios = await this.homicidioRepository.find({
      where: {
        fecha_hecho: Between(adjustedStartDate, adjustedEndDate),
      },
      relations: this.relations,
      order: { fecha_hecho: 'ASC' },
    });

    return someHomicidios.map((homicidio) =>
      HomicidioTypeORMMapper.toDomain(homicidio),
    );
  }
}
