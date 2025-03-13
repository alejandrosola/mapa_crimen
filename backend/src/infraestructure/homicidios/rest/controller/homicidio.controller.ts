import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResponseData, responseJson } from 'src/util/responseMessage';
import { FindHomicidios } from 'src/domain/homicidios/case/findHomicidios.case';
import { HomicidioRestMapper } from '../mapper/homicidio.rest.mapper';
import { HomicidioPayload } from '../payload/homicidio.payload';
import { Homicidio as DomainHomicidio } from 'src/domain/homicidios/model/homicidio.entity';
import { endOfDay, startOfDay } from 'src/util/dateHelpers';

export class HomicidioFilters {
  start?: string;
  end?: string;
  anio?: number;
  localidad?: string;
  provincia?: string;
  claseArma?: string;
  startDate?: Date;
  endDate?: Date;
}

@Controller('homicidios')
export class HomicidioController {
  constructor(private readonly findHomicidios: FindHomicidios) {}

  @Get()
  async findAll(): Promise<ResponseData<HomicidioPayload[]>> {
    console.log('PETICION');
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
    const startDate = startOfDay(new Date(start));
    const endDate = endOfDay(new Date(end));

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

  @Get('/filter')
  async findByFiltros(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('anio') anio?: number,
    @Query('localidad') localidad?: string,
    @Query('provincia') provincia?: string,
    @Query('claseArma') claseArma?: string,
  ): Promise<ResponseData<HomicidioPayload[]>> {
    const filters: Partial<HomicidioFilters> = {};

    if (startDate) {
      filters.startDate = startOfDay(new Date(startDate));
    }

    if (endDate) {
      filters.endDate = endOfDay(new Date(endDate));
    }

    if (anio && anio != 0) {
      filters.anio = anio;
    }

    if (localidad && localidad != '') {
      filters.localidad = localidad;
    }

    if (provincia && provincia != '') {
      filters.provincia = provincia;
    }

    if (claseArma && claseArma != '') {
      filters.claseArma = claseArma;
    }

    const someHomicidios: DomainHomicidio[] =
      await this.findHomicidios.findByFiltros(filters);

    return responseJson(
      200,
      `${someHomicidios.length} Homicidios recuperados con éxito`,
      someHomicidios.map((homicidio) =>
        HomicidioRestMapper.toPayload(homicidio),
      ),
    );
  }
}
