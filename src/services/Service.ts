import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const cadastrarCategoria = async (dados: any, setDados: (arg0: any) => void) => {
    const resposta = await api.post('/categorias', dados);
    setDados(resposta.data);
};

export const cadastrarProduto = async (dados: any, setDados: (arg0: any) => void) => {
    const resposta = await api.post('/produtos', dados);
    setDados(resposta.data);
};

export const buscarCategorias = async (setDados: (arg0: any) => void, header: any) => {
    const resposta = await api.get('/categorias', { headers: header });
    setDados(resposta.data);
};

export const buscarProdutos = async (setDados: (arg0: any) => void, header: any) => {
    const resposta = await api.get('/produtos', { headers: header });
    setDados(resposta.data);
};

export const atualizarCategoria = async (url: string, dados: any, setDados: (arg0: any) => void, header: any) => {
    const resposta = await api.put(url, dados, { headers: header });
    setDados(resposta.data);
};

export const atualizarProduto = async (url: string, dados: any, setDados: (arg0: any) => void, header: any) => {
    const resposta = await api.put(url, dados, { headers: header });
    setDados(resposta.data);
};

export const deletarCategoria = async (url: string, header: any) => {
    await api.delete(url, { headers: header });
};

export const deletarProduto = async (url: string, header: any) => {
    await api.delete(url, { headers: header });
};
