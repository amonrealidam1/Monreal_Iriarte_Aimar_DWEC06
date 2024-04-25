import React from 'react';
import CocktailList from '../components/cocktail-list';
const Home = () => {
    return (
        // Se crea la estructura de la pagina Home que llama a CocktailList
        <main>
            <CocktailList />
        </main>
    );
};

export default Home;
