import React from 'react';

const Navbar = () => {
  return (
    // Se crea la estructura de la barra de navegacion
    <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links"><span>Cocktail DWEC-DB</span></ul>
                <ul className="nav-links">
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </div>
        </nav>
  );
};

export default Navbar;
