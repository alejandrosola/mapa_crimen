import { Localidad as DomainLocalidad } from 'src/domain/localidades/model/localidad.entity';
import { Localidad as TypeORMLocalidad } from '../model/localidad.entity';

export class LocalidadTypeORMMapper {
  static toDomain(localidad: TypeORMLocalidad): DomainLocalidad {
    const domainLocalidad: DomainLocalidad = new DomainLocalidad();
    domainLocalidad.id = localidad.id;
    domainLocalidad.num = localidad.num;
    domainLocalidad.nombre = localidad.nombre;
    domainLocalidad.departamento = localidad.departamento;

    return domainLocalidad;
  }

  static toTypeORM(domainLocalidad: DomainLocalidad): TypeORMLocalidad {
    const typeORMLocalidad = new TypeORMLocalidad();

    typeORMLocalidad.id = domainLocalidad.id;
    typeORMLocalidad.num = domainLocalidad.num;
    typeORMLocalidad.nombre = domainLocalidad.nombre;
    typeORMLocalidad.departamento = domainLocalidad.departamento;
    return typeORMLocalidad;
  }
}
