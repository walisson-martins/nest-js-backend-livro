import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('Liv001', 'livro TDD e BDD na prática', 20.0),
    new Livro('Liv002', 'livro iniciando com flutter', 4.0),
    new Livro('Liv003', 'livro Java web', 120.0),
  ];

  obterTodos(): Livro[] { 
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    return this.livros.pop();
  }
}
