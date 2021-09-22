import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produtos.controller';
import { ProdutosService } from './produtos.services';

@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
