import { Produto } from './produto.model';
import { ProdutosService } from './produtos.services';
export declare class ProdutoController {
    private produtosService;
    constructor(produtosService: ProdutosService);
    obterTodos(): Produto[];
    obterUm(param: any): Produto;
    criar(produto: Produto): void;
    alterar(produto: Produto): Produto;
    apagar(param: any): void;
}
