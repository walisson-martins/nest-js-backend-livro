import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.services';


@Controller('produtos')
export class ProdutoController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() param): Produto {
    return this.produtosService.obterUm[param.id];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 1000;
    this.produtosService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() param) {
    this.produtosService.apagar(param.id);
  }
}
