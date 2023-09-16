import React, { useState } from "react";
import usuario from '../Assets/user-solid.svg';
import favorito from '../Assets/star-solid.svg';
import { Outlet, Link } from "react-router-dom";
const Card = ({ name, username, id }) => {

  const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem(id)) !== null || false);
  const addFav = ()=>{
    setIsFavorite(!isFavorite);
    if(!isFavorite){
      localStorage.setItem(id, JSON.stringify({ name, username, id }));
    }
    else{
      localStorage.removeItem(id);
    }
  }

  return (
    <div className="card">
      
      <div className="header">
        <h2>{name}</h2>
        {isFavorite ? <div><img className="iconStart custom-svg" src={favorito} /></div> : null}
        
      </div>

      <div className="content">
        <div className="image">
          <img src={usuario} />
      
        </div>
        <div className="footerCard">

          <div className="infouser">
            <p>Usuario: {username}</p>
            <p>ID: {id}</p>

          </div>
          <div className="buttons">

          <Link to={"dentist/"+id}><button className="favButton">Ver detalle</button></Link>
            <button onClick={addFav} className="favButton">{!isFavorite ? "Agregar a" : "Quitar de"} favoritos</button>
          </div>
        </div>
      </div>
      
        
      
    </div>
  );
};

export default Card;
