import { useState, useEffect } from 'react';
import data from '../data';
import Articulo from './articulo';

const Articulos = ({ dataType }) => {

    //Se crea el contador 
    const [counter, setCounter] = useState(1);

    //Se filtran los datos dependiendo de el boton que este seleccionado y se asigna el tamaño
    let coleccion = dataType == 'todo' ? data : data.filter(imagen => imagen.categoria == dataType.toString());
    let lngth = coleccion.length;

    //Se crea el bucle del contador solo pudiendo llegar al lngth como maximo antes de reiniciarse
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter % lngth) + 1);
        }, 2000);
    
        return () => clearInterval(interval);
    }, [lngth]);


    //Se calcula la clase dependiendo del index y del contador en ese momento
    return (
        <div>
            <div className="section-center">
                {coleccion.map((imagen, index) => (
                    <Articulo
                        key={imagen.id}
                        nombreClase={counter == index+1 ? 'activeSlide' : (counter > index+1 ? 'lastSlide' : 'nextSlide')}
                        name={imagen.img}
                        src={imagen.src}
                        categoria={imagen.categoria}
                    />
                ))}
            </div>
        </div>
    );
};

export default Articulos;
