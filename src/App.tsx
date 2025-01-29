import { useState } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategorias from './categorias/listacategorias/ListaCategorias';
import FormCategorias from './categorias/formcategorias/FormCategorias';
import DeletarCategoria from './categorias/deletecategorias/DeletarCategorias';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategorias/:id" element={<FormCategoria />} />
            <Route path="/deletarcategorias/:id" element={<DeletarCategoria />} />
            
             
          </Routes>
        </div>
            

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
