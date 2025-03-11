import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomicidioModule } from './modules/homicidio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalidadModule } from './modules/localidad.module';

@Module({
  imports: [
    HomicidioModule,
    LocalidadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mapa_seguridad',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
