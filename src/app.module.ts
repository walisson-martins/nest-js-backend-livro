import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroController } from './livros.controller';
import { LivrosService } from './livros.services';

@Module({
  imports: [],
  controllers: [AppController, LivroController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
