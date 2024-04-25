import React, { useState, useEffect } from 'react';
import Persona from './persona';

const Titulo = ({ data }) => {
  const [persons, setPersons] = useState([]);

  // Se ejecuta cuando data cambia
  useEffect(() => {
    setPersons(data);
  }, [data]); 

  // Borra la persona cuando se borra desde el componente persona
  const handleDeletePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  // Se asigna el titulo y se crean todas las personas llamando al componente persona
  return (
    <main>
      <section className="container">
        <h3>Hoy hay {persons.length} cumpleaños</h3>

        {persons.map((person) => (
          <Persona
            key={person.id}
            id={person.id}
            image={`https://randomuser.me/api/portraits/men/${person.id}.jpg`}
            name={person.name}
            mail={person.email}
            phone={person.phone}
            onDelete={handleDeletePerson}
          />
        ))}
      </section>
    </main>
  );
};

export default Titulo;
