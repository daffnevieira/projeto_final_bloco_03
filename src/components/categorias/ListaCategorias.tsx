import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { Categoria } from '../../models/Categoria';  // Importe a model Categoria

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    // Requisição GET para listar todas as categorias
    axios.get('/api/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar categorias:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <strong>{categoria.nome}</strong> - {categoria.descricao}
            {/* <ul>
              {categoria.produtos.map((produto) => (
                <li key={produto.id}>{produto.nome}</li> // Listar os produtos relacionados
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
