import { ProvinciaRestMapper } from 'src/infraestructure/provincias/rest/mapper/provincia.rest.mapper';
import { DepartamentoPayload } from '../payload/departamento.payload';
import { Departamento as DomainDepartamento } from 'src/domain/departamentos/model/departamento.entity';

export class DepartamentoRestMapper {
  static toPayload(departamento: DomainDepartamento): DepartamentoPayload {
    return {
      id: departamento.id,
      num: departamento.num,
      nombre: departamento.nombre,
      provincia: ProvinciaRestMapper.toPayload(departamento.provincia),
    };
  }
}
