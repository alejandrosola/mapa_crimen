import { Controller, Get } from '@nestjs/common';
import { ResponseData, responseJson } from 'src/util/responseMessage';
import { LocalidadPayload } from '../payload/localidad.payload';
import { FindLocalidades } from 'src/domain/localidades/case/findLocalidades.case';
import { Localidad as DomainLocalidad } from 'src/domain/localidades/model/localidad.entity';
import { LocalidadRestMapper } from '../mapper/localidad.rest.mapper';

@Controller('localidades')
export class LocalidadController {
  constructor(private readonly findLocalidades: FindLocalidades) {}

  @Get()
  async findAll(): Promise<ResponseData<LocalidadPayload[]>> {
    const someLocalidades: DomainLocalidad[] =
      await this.findLocalidades.findAll();

    return responseJson(
      200,
      `${someLocalidades.length} Localidades recuperadas con éxito`,
      someLocalidades.map((localidad) =>
        LocalidadRestMapper.toPayload(localidad),
      ),
    );
  }
}
