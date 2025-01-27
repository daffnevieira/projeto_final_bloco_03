import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import Footer from './pages/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
