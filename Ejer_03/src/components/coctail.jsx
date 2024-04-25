import React from 'react';
import { Link } from 'react-router-dom';

const Coctail = ({ cocktail }) => {

    // Se returnea la estructura y se hace un Link a la pagina del cocktel en especifico pasandole la url y los datos 
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
            <div className="cocktail-footer">
                <h3>{cocktail.strDrink}</h3>
                <h4>{cocktail.strGlass}</h4>
                <p>{cocktail.strAlcoholic}</p>
                <Link className="btn btn-primary btn-details" to={`/cocktail/${cocktail.idDrink}`} state={{cocktail}}>
                    Details
                </Link>
            </div>
        </article>
    );
}

export default Coctail;