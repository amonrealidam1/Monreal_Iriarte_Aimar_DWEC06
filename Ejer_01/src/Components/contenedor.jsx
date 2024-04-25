import { useState } from "react"

import Articulos from "./articulos"

const Contenedor = () => {

    //Se crea el useState
    const [counter, setCounter] = useState("todo");

    //Se asignan funciones
    const all = () => setCounter("todo");
    const nature = () => setCounter("naturaleza");
    const mar = () => setCounter("mar");
    const parap = () => setCounter("parapente");

    // Se crea el section con cada boton y se llama Articulos despues de el div de titulo

    return (
        <section className="section">
            <div className="title">
                <h2>slider DWEC</h2>
                <div className="underline"></div>
            </div>
            <div className="btn-container">
                <button className="filter-btn" onClick={all} title="Todas las categorias">Todas las categorias</button>
                <button className="filter-btn" onClick={nature} title="Naturaleza">Naturaleza</button>
                <button className="filter-btn" onClick={mar} title="Mar">Mar</button>
                <button className="filter-btn" onClick={parap} title="Parapente">Parapente</button>
            </div>
            <Articulos dataType={counter}/>
        </section>

    )
}

export default Contenedor