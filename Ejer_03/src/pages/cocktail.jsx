
import { useLocation } from 'react-router-dom';

const Cocktail = () => {

  // Se consigue el valor de cocktail a traves de location

  const location = useLocation()

  const cocktail = location.state.cocktail

  console.log(cocktail)

  // Renderizar el componente, se recorren los ingredientes (las entries que empiezan con "strIngredient")
  return (
    <section className="section cocktail-section">
      <a className="btn btn-primary" href="/">back home</a>
      {cocktail ? (
        <div>
          <h1 className="section-title">{cocktail.strDrink}</h1>
          <div className="drink">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="drink-detail" />
            <div className="drink-info">
              <p><span className="drink-data">name :</span> {cocktail.strDrink}</p>
              <p><span className="drink-data">category :</span> {cocktail.strCategory}</p>
              <p><span className="drink-data">info :</span> {cocktail.strAlcoholic}</p>
              <p><span className="drink-data">glass :</span> {cocktail.strGlass}</p>
              <p><span className="drink-data">instructions :</span> {cocktail.strInstructions}</p>
              <p><span className="drink-data">ingredients :</span>   
                {Object.entries(cocktail)
                  .filter(([key]) => key.startsWith('strIngredient'))
                  .map(([_, value], index) => (
                    <span key={index}>{value}</span>
                  ))}


              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );

};

export default Cocktail;
