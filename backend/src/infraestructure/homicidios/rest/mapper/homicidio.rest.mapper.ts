import { Homicidio } from 'src/domain/homicidios/model/homicidio.entity';
import { HomicidioPayload } from '../payload/homicidio.payload';
import { LocalidadRestMapper } from 'src/infraestructure/localidades/rest/mapper/localidad.rest.mapper';
import { PersonaRestMapper } from 'src/infraestructure/personas/rest/mapper/persona.rest.mapper';

export class HomicidioRestMapper {
  static toPayload(homicidio: Homicidio): HomicidioPayload {
    return {
      id_hecho: homicidio.id_hecho,
      federal: homicidio.federal,
      latitud_radio: homicidio.latitud_radio,
      longitud_radio: homicidio.longitud_radio,
      anio: homicidio.anio,
      mes: homicidio.mes,
      fecha_hecho: homicidio.fecha_hecho,
      hora_hecho: homicidio.hora_hecho,
      tipo_lugar: homicidio.tipo_lugar,
      clase_arma: homicidio.clase_arma,
      localidad: LocalidadRestMapper.toPayload(homicidio.localidad),
      victimas: homicidio.victimas?.map((victima) =>
        PersonaRestMapper.toPayload(victima),
      ),
      imputados: homicidio.imputados?.map((imputado) =>
        PersonaRestMapper.toPayload(imputado),
      ),
    };
  }
}
