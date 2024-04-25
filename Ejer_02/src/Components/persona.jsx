import React from 'react';
import trashIcon from '../trash.png';

const Persona = ({id, image, name, mail, phone, onDelete }) => {

  // Llama a la funcion para borrar la persona clicada
    const handleDelete = () => {
        onDelete(id);
      };

  return (
    // Se crea la estructura del artículo para cada persona
    <article className="person">
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{mail}</p>
        <p>{phone}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        <img src={trashIcon}/>
      </button>
    </article>
  );
};

export default Persona;
