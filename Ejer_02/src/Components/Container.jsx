import React, { useState, useEffect } from 'react';
import Titulo from './titulo';


function Container() {

    //Se crea el useState 
    const [users, setUsers] = useState([]);

    //Se hace fetch a las personas
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    //Se le pasan las personas al componente Titulo
    return (
        <Titulo data={users}></Titulo>
    );
}

export default Container