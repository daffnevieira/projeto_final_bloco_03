import Produto  from "./Produto";

export interface Categoria {
    id: number;               // O ID é gerado automaticamente no backend
    nome: string;             // Nome da categoria
    descricao: string;        // Descrição da categoria
    produtos: Array<Produto>; // Lista de produtos relacionados à categoria
}
  