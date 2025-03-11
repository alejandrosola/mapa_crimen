import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindHomicidios } from 'src/domain/homicidios/case/findHomicidios.case';
import { IHomicidioRepository } from 'src/domain/homicidios/port/IHomicidioRepository';
import { HomicidioController } from 'src/infraestructure/homicidios/rest/controller/homicidio.controller';
import { Homicidio } from 'src/infraestructure/homicidios/typeorm/model/homicidio.entity';
import { HomicidioRepository } from 'src/infraestructure/homicidios/typeorm/repository/homicidio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Homicidio])],
  controllers: [HomicidioController],
  providers: [
    HomicidioRepository,
    FindHomicidios,
    {
      provide: IHomicidioRepository,
      useClass: HomicidioRepository,
    },
  ],
  exports: [HomicidioRepository],
})
export class HomicidioModule {}
