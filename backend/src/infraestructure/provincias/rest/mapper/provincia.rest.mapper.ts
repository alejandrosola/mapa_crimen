import { Provincia as DomainProvincia } from 'src/domain/provincias/model/provincia.entity';
import { ProvinciaPayload } from '../payload/provincia.payload';
export class ProvinciaRestMapper {
  static toPayload(provincia: DomainProvincia): ProvinciaPayload {
    return {
      id: provincia.id,
      num: provincia.num,
      nombre: provincia.nombre,
    };
  }
}
