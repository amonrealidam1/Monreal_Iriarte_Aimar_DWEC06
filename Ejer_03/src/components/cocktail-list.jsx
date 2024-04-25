import React, { useState, useEffect } from 'react';
import Coctail from './coctail';
import Loading from './loading';

const CocktailList = () => {


    // Se crean los useStates de cocktails y de login
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true); 


    // Se hace fetch a los datos y cuando estos llegues se pone loading en false;
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            .then(response => response.json())
            .then(data => {
                if (data.drinks && data.drinks.length > 0) {
                    // Solo se utilizan los primeros 3
                    const firstThreeCocktails = data.drinks.slice(0, 3);
                    setCocktails(firstThreeCocktails);
                }
                
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cocktails:', error);
                setLoading(false);
            });
    }, []);

    // Se hace return a la estructura con los 3 cockteles a los que se les pasa el id y la informacion
    return (
        <section className="section">
            <h2 className="section-title">Cocktails</h2>
            {loading ? ( <div  className="cocktails-center"> <Loading/> </div> ) : 
            (
                <div className="cocktails-center">
                    {cocktails.map(cocktail => (
                        <Coctail key={cocktail.idDrink} cocktail={cocktail} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default CocktailList;
