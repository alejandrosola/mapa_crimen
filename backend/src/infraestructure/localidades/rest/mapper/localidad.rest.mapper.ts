import { Localidad as DomainLocalidad } from 'src/domain/localidades/model/localidad.entity';
import { LocalidadPayload as LocalidadPayload } from '../payload/localidad.payload';
import { DepartamentoRestMapper } from 'src/infraestructure/departamento/rest/mapper/departamento.rest.mapper';

export class LocalidadRestMapper {
  static toPayload(localidad: DomainLocalidad): LocalidadPayload {
    return {
      id: localidad.id,
      num: localidad.num,
      nombre: localidad.nombre,
      departamento: DepartamentoRestMapper.toPayload(localidad.departamento),
    };
  }
}
