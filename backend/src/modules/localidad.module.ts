import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindLocalidades } from 'src/domain/localidades/case/findLocalidades.case';
import { ILocalidadRepository } from 'src/domain/localidades/port/ILocalidadRepository';
import { LocalidadController } from 'src/infraestructure/localidades/rest/controller/localidad.controller';
import { Localidad } from 'src/infraestructure/localidades/typeorm/model/localidad.entity';
import { LocalidadRepository } from 'src/infraestructure/localidades/typeorm/repository/localidad.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Localidad])],
  controllers: [LocalidadController],
  providers: [
    LocalidadRepository,
    FindLocalidades,
    {
      provide: ILocalidadRepository,
      useClass: LocalidadRepository,
    },
  ],
  exports: [LocalidadRepository],
})
export class LocalidadModule {}
