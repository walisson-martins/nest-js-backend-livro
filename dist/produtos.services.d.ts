import { Produto } from './produto.model';
export declare class ProdutosService {
    produtos: Produto[];
    obterTodos(): Produto[];
    obterUm(id: number): Produto;
    criar(produto: Produto): void;
    alterar(produto: Produto): Produto;
    apagar(id: number): Produto;
}
