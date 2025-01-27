import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Categorias from './pages/categorias/Categorias'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/ListaCategorias'
import FormCategorias from './components/categorias/FormCategorias'
import DeleteCategorias from './components/categorias/DeleteCategorias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/listarcategorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategorias" element={<FormCategorias />} />
              <Route path="/editarcategorias" element={<FormCategorias />} />
              <Route path="/deletarcategorias/:id" element={<DeleteCategorias categoriaId={0} onCategoriaDeletada={function (): void {
              throw new Error('Function not implemented.')
            } } />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
