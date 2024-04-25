import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cocktail from "./pages/cocktail";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";


// Se crean las rutas necesarias para todas las paginas 
const Container = () => {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Home />} /> {/* Usamos element para renderizar el componente */}
        <Route path="/Cocktail/:id" element={<Cocktail />} /> {/* Ruta dinámica para el cocktail */}
        <Route path='/About' element={<About />} /> 
        <Route path='/*' element={<Error />} /> 
      </Routes>
    </Router>
  );
}

export default Container;
