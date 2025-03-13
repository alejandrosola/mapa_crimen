export interface Homicidio {
  id_hecho: number;
  federal: string;
  latitud_radio: number;
  longitud_radio: number;
  anio: number;
  mes: number;
  fecha_hecho: Date;
  hora_hecho: string;
  tipo_lugar: string;
  clase_arma: string;
  localidad: string; // Por ahora
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  victimas: any[]; // Por ahora
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imputados: any[]; // Por ahora
}
