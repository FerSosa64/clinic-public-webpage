import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/servicios" element={<Services />} />
    </Routes>
  )
}

export default App
