import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Categorias from './pages/categorias/Categorias'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-80vh]">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} /> */}
              <Route path="/categorias" element={<Categorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
