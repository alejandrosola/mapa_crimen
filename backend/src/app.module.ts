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
      url: 'postgres://neondb_owner:npg_ASo0H9VsGbpT@ep-purple-morning-a433ypov-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false, // ✅ Necesario para Neon
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
