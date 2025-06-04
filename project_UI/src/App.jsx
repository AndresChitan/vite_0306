import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/styles/App.css";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import {HomePage} from './Pages/HomePage';
import Productos from './Pages/Productos';
import Contactos from './Pages/Contactos'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar 
            toggleSidebar={toggleSidebar} 
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuOpen={mobileMenuOpen}
          />
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className={sidebarOpen ? 'content-shifted' : ''}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<Productos/>} />
              <Route path="/contactos" element={<Contactos/>} />
              {/* Agrega más rutas aquí según necesites */}
            </Routes>
          </main>
          <Footer />
        </div>
    </BrowserRouter>
  );
  
}

export default App;

/*
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<HomePage/>}></Route>
        <Route path="/Productos" element={<Productos/>}></Route>
      </Routes>
    </BrowserRouter>
  );
  */