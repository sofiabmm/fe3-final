import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState(null);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  useEffect(() => {
    // Realiza una solicitud a la API cuando el componente se monta
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no se pudo completar.');
        }
        return response.json();
      })
      .then((data) => {
        // Actualiza el estado con los datos del dentista
        setDentist(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del dentista:', error);
      });
  }, []);
  return (
    <>
    <div className='details'>
      <h1>{dentist?.name}</h1>
      <div className='dataDentist'>
        <p>{dentist?.email}</p>
        <p>{dentist?.phone}</p>
        <p>{dentist?.website}</p>
        
        </div>

    </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail