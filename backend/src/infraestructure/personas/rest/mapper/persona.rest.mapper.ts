import { PersonaPayload } from '../payload/persona.payload';
import { Persona as DomainPersona } from 'src/domain/personas/model/persona.entity';
export class PersonaRestMapper {
  static toPayload(persona: DomainPersona): PersonaPayload {
    return {
      id: persona.id,
      num: persona.num,
      tipo: persona.tipo,
    };
  }
}
