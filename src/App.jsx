/**
 * Componente principal de la aplicación que integra Header, Sidebar y Footer.
 * 
 * Este componente sirve como la raíz de la aplicación y garantiza que
 * todos los elementos estructurales estén correctamente posicionados.
 * 
 * @module App
 * @author {Ana Castro}{Nico Fernández}{Ángel Aragón}
 */

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Adopt from './pages/Adopt/Adopt';
import './App.css';

/**
 * Componente App que renderiza el diseño principal y usa `Routes` para el path de la app.
 * 
 * @function App
 * @returns {JSX.Element} El componente App renderizado.
 * @modified `MIC-6` - Agregado Header
 * @author {Ana Castro}
 */

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      
      {/* Contenido principal con altura dinámica y asegure scroll sin afectar footer */}
      <div className="l">
        <main className="flex-1 h[100%] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
