import React, { useState, useEffect } from 'react';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistData, setDentistData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API cuando el componente se monta
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no se pudo completar.');
        }
        return response.json();
      })
      .then((data) => {
        // Actualiza el estado con los datos del dentista
        setDentistData(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del dentista:', error);
      });
  }, []);
  if (!dentistData) {
    return <div>Cargando...</div>;
  }
  return (
    <main className="" >
      
      <div className='card-grid'>
      {dentistData.map((dentist, index) => (
              <div className="dentist-card" key={index}>
                <Card name={dentist.name} username={dentist.username} id={dentist.id} />
                
              </div>
            ))}
      </div>
    </main>
  )
}

export default Home