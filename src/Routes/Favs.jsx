import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const aux_favs = []
    for (var key of Object.keys(localStorage)){
      aux_favs.push(JSON.parse(localStorage.getItem(key)))
    }
    setFavs([...aux_favs])
  }, []);
  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className='card-grid'>
      {favs.map((dentist, index) => (
              <div className="dentist-card" key={index}>
                <Card name={dentist.name} username={dentist.username} id={dentist.id} />
                
              </div>
            ))}
      </div>
    </>
  );
};

export default Favs;
