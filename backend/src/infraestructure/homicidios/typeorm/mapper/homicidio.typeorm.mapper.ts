import { PersonaTypeORMMapper } from 'src/infraestructure/personas/typeorm/mapper/persona.typeorm.mapper';
import { Homicidio as TypeORMHomicidio } from '../model/homicidio.entity';
import { Homicidio as DomainHomicidio } from 'src/domain/homicidios/model/homicidio.entity';
import { LocalidadTypeORMMapper } from 'src/infraestructure/localidades/typeorm/mapper/localidad.typeorm.mapper';

export class HomicidioTypeORMMapper {
  static toDomain(homicidio: TypeORMHomicidio): DomainHomicidio {
    const domainHomicidio: DomainHomicidio = new DomainHomicidio();
    domainHomicidio.id_hecho = homicidio.id_hecho;
    domainHomicidio.federal = homicidio.federal;
    domainHomicidio.latitud_radio = homicidio.latitud_radio;
    domainHomicidio.longitud_radio = homicidio.longitud_radio;
    domainHomicidio.anio = homicidio.anio;
    domainHomicidio.mes = homicidio.mes;
    domainHomicidio.fecha_hecho = homicidio.fecha_hecho;
    domainHomicidio.hora_hecho = homicidio.hora_hecho;
    domainHomicidio.tipo_lugar = homicidio.tipo_lugar;
    domainHomicidio.clase_arma = homicidio.clase_arma;
    domainHomicidio.localidad = LocalidadTypeORMMapper.toDomain(
      homicidio.localidad,
    );
    domainHomicidio.victimas = homicidio.victimas?.map((victima) =>
      PersonaTypeORMMapper.toDomain(victima),
    );
    domainHomicidio.imputados = homicidio.imputados?.map((imputado) =>
      PersonaTypeORMMapper.toDomain(imputado),
    );

    return domainHomicidio;
  }

  static toTypeORM(domainHomicidio: DomainHomicidio): TypeORMHomicidio {
    const typeORMHomicidio = new TypeORMHomicidio();

    typeORMHomicidio.id_hecho = domainHomicidio.id_hecho;
    typeORMHomicidio.federal = domainHomicidio.federal;
    typeORMHomicidio.latitud_radio = domainHomicidio.latitud_radio;
    typeORMHomicidio.longitud_radio = domainHomicidio.longitud_radio;
    typeORMHomicidio.anio = domainHomicidio.anio;
    typeORMHomicidio.mes = domainHomicidio.mes;
    typeORMHomicidio.fecha_hecho = domainHomicidio.fecha_hecho;
    typeORMHomicidio.hora_hecho = domainHomicidio.hora_hecho;
    typeORMHomicidio.tipo_lugar = domainHomicidio.tipo_lugar;
    typeORMHomicidio.clase_arma = domainHomicidio.clase_arma;
    typeORMHomicidio.localidad = LocalidadTypeORMMapper.toTypeORM(
      domainHomicidio.localidad,
    );
    typeORMHomicidio.victimas = domainHomicidio.victimas?.map((victima) =>
      PersonaTypeORMMapper.toTypeORM(victima),
    );
    typeORMHomicidio.imputados = domainHomicidio.imputados?.map((imputado) =>
      PersonaTypeORMMapper.toTypeORM(imputado),
    );
    return typeORMHomicidio;
  }
}
