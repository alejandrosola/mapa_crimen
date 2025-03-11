import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILocalidadRepository } from 'src/domain/localidades/port/ILocalidadRepository';
import { Repository } from 'typeorm';
import { Localidad } from '../model/localidad.entity';
import { Localidad as DomainLocalidad } from 'src/domain/localidades/model/localidad.entity';
import { LocalidadTypeORMMapper } from '../mapper/localidad.typeorm.mapper';

@Injectable()
export class LocalidadRepository implements ILocalidadRepository {
  constructor(
    @InjectRepository(Localidad)
    private readonly localidadRepository: Repository<Localidad>,
  ) {}

  relations = ['departamento', 'departamento.provincia'];

  async findAll(): Promise<DomainLocalidad[]> {
    const someLocalidades = await this.localidadRepository.find({
      relations: this.relations,
    });

    return someLocalidades.map((localidad) =>
      LocalidadTypeORMMapper.toDomain(localidad),
    );
  }
}
