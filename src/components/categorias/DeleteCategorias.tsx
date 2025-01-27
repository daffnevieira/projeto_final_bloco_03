import React from 'react';
import axios from 'axios';

const DeleteCategoria = ({ categoriaId, onCategoriaDeletada }: { categoriaId: number; onCategoriaDeletada: () => void }) => {
  const handleDelete = () => {
    axios.delete(`/api/categorias/${categoriaId}`)
      .then(() => {
        onCategoriaDeletada(); // Atualiza a lista de categorias após exclusão
        alert('Categoria excluída com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao excluir categoria:', error);
      });
  };

  return (
    <button onClick={handleDelete}>
      Excluir Categoria
    </button>
  );
};

export default DeleteCategoria;
