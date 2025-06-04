import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import "../assets/styles/Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = ({ toggleSidebar, toggleMobileMenu, mobileMenuOpen }) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botón para el sidebar (visible en desktop) */}
        <button 
          className="sidebar-toggle-icon" 
          onClick={toggleSidebar}
          aria-label="Abrir menú lateral"
        >
          <FaBars />
        </button>
        
        <div className="navbar-logo">
          <Link to="/">Mi Tienda</Link>
        </div>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactos" className="nav-link">Contactos</Link>
            </li>
          </ul>
        </div>

        <div className="nav-cart">
          <button className="cart-button">
            <FaShoppingCart />
            {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
          </button>
        </div>

        {/* Botón para menú móvil (visible en mobile) */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};