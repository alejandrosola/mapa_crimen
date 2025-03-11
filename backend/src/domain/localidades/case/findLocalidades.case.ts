import { Inject, Injectable } from '@nestjs/common';
import { Localidad } from '../model/localidad.entity';
import { IFindLocalidades } from '../port/IFindLocalidades';
import { ILocalidadRepository } from '../port/ILocalidadRepository';

@Injectable()
export class FindLocalidades implements IFindLocalidades {
  constructor(
    @Inject(ILocalidadRepository)
    private readonly localidadRepository: ILocalidadRepository,
  ) {}

  findAll(): Promise<Localidad[]> {
    return this.localidadRepository.findAll();
  }
}
