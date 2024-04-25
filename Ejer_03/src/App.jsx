import React from "react";
import Navbar from "./components/navbare"; 
import Container from "./index";

function App() {
    return (
        // Se crea la base de la pagina llamando a Navbar y al contenido que toque
        <div>
            <Navbar />
            <Container />
        </div>
    );
}

export default App;