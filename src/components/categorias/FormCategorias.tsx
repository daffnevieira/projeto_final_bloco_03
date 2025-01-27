import { useState } from 'react';

function CadastroCategoria() {
  // Estado para os dados do formulário
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode fazer uma requisição para a API para salvar a categoria
    const categoria = { nome, descricao };
    console.log(categoria); // Para debug, exibe os dados no console


    // Resetar o formulário
    setNome('');
    setDescricao('');
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-2/3 gap-3"
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar Categoria</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome da Categoria"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descrição da Categoria"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              type="button"
              className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadastroCategoria;
