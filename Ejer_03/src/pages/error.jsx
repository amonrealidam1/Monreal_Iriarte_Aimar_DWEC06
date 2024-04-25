import React from 'react';

const Error = () => {
    return (
        // Se crea la estructura de la pagina de error
        <main className='error-page'>
            <section className="section about-section">
                <section className="error-container">
                    <h1 className="section-title">Ups! Lo sentimos pero la pagina que busca no existe.</h1>
                    <a className='btn-primary' href="/">Volver a Home</a>
                </section>
            </section>
        </main>
    );
};

export default Error;
