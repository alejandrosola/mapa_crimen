import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResponseData, responseJson } from 'src/util/responseMessage';
import { FindHomicidios } from 'src/domain/homicidios/case/findHomicidios.case';
import { HomicidioRestMapper } from '../mapper/homicidio.rest.mapper';
import { HomicidioPayload } from '../payload/homicidio.payload';
import { Homicidio as DomainHomicidio } from 'src/domain/homicidios/model/homicidio.entity';

@Controller('homicidios')
export class HomicidioController {
  constructor(private readonly findHomicidios: FindHomicidios) {}

  @Get()
  async findAll(): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findAll();

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con exito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/anio/:anio')
  async findByAnio(
    @Param('anio') anio: number,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByAnio(anio);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con exito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/localidad/:num/:nombre/:departamento_num')
  async findByLocalidad(
    @Param('num') num: string,
    @Param('nombre') nombre: string,
    @Param('departamento_num') departamento_num: number,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByLocalidad(num, nombre, departamento_num);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/localidad/:nombre')
  async findByLocalidadNombre(
    @Param('nombre') nombre: string,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByLocalidadNombre(nombre);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/provincia/:query')
  async findByProvincia(
    @Param('query') query: string,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByProvincia(query);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/claseArma/:claseArma')
  async findByClaseArma(
    @Param('claseArma') claseArma: string,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByClaseArma(claseArma);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }

  @Get('/fecha')
  async findByFechaRango(
    @Query('start') start: string,
    @Query('end') end: string,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const startDate = new Date(start);
    startDate.setUTCHours(0, 0, 0, 0);

    const endDate = new Date(end);
    endDate.setUTCHours(23, 59, 59, 999);

    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByFechaRango(startDate, endDate);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }
}
