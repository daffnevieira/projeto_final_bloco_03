import { Categoria } from "./Categoria";

export default interface Produtos {
  id: number;
  nomeProduto: string;
  preco: number;
  quantidade: number;
  vendas: number;
  categoria: Categoria | null;
}