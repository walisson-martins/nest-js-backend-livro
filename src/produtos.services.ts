import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('Liv001', 'livro TDD e BDD na prática', 20.0),
    new Produto('Liv002', 'livro iniciando com flutter', 4.0),
    new Produto('Liv003', 'livro Java web', 120.0),
  ];

  obterTodos(): Produto[] { 
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number) {
    return this.produtos.pop();
  }
}
