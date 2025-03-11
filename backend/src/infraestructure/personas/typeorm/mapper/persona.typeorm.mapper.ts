import { Persona as DomainPersona } from 'src/domain/personas/model/persona.entity';
import { Persona as TypeORMPersona } from '../model/persona.entity';

export class PersonaTypeORMMapper {
  static toDomain(persona: TypeORMPersona): DomainPersona {
    const domainPersona: DomainPersona = new DomainPersona();

    domainPersona.id = persona.id;
    domainPersona.num = persona.num;
    domainPersona.tipo = persona.tipo;

    return domainPersona;
  }

  static toTypeORM(domainPersona: DomainPersona): TypeORMPersona {
    const typeORMPersona: TypeORMPersona = new TypeORMPersona();

    typeORMPersona.id = domainPersona.id;
    typeORMPersona.num = domainPersona.num;
    typeORMPersona.tipo = domainPersona.tipo;

    return typeORMPersona;
  }
}
