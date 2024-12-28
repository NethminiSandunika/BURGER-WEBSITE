import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/assets/img/logo-burger.svg" alt="logo" />
          Burger
        </a>
        <div className={`nav__menu ${menuOpen ? 'open' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li><a href="#home" className="nav__link">Home</a></li>
            <li><a href="#recipe" className="nav__link">Recipe</a></li>
            <li><a href="#popular" className="nav__link">Popular</a></li>
            <li><a href="#delivery" className="nav__link">Delivery</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="ri-apps-2-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
