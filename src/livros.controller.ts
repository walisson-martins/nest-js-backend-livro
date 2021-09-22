import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.services';

@Controller('livros')
export class LivroController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() param): Livro {
    return this.livrosService.obterUm[param.id];
  }

  @Post()
  criar(@Body() livro: Livro) {
    livro.id = 1000;
    this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() param) {
    this.livrosService.apagar(param.id);
  }
}
