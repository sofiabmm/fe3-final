import React from 'react'
import { Outlet, Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ toggleTheme }) => {

  return (
    <nav className="dark">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><a href="/favs">Favoritos</a></li>
      </ul>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </nav>
  )
}

export default Navbar