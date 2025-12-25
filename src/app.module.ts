import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { EpisodioModule } from './episodio/episodio.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres', //"mysql",
      host: process.env.POSTGRES_HOST, //"localhost",
      port: parseInt(process.env.POSTGRES_PORT!), //5435,
      username: process.env.POSTGRES_USERNAME, //"postgres",
      password: process.env.POSTGRES_PASSWORD, //"postgres", //"root",
      database: process.env.POSTGRES_DATABASE, //"db_crud",
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.POSTGRES_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),

    SerieModule,
    EpisodioModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
