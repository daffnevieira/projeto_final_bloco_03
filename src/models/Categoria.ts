import Produto  from "./Produto";

export interface Categoria {
    id: number;               
    nome: string;             
    descricao: string;        
    produtos: Array<Produto>;
}
  