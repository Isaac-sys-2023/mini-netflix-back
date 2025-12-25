import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { EpisodioModule } from './episodio/episodio.module';

@Module({
  imports: [SerieModule, EpisodioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
