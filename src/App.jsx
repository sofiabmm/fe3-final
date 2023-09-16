import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';

// Acciones para cambiar el tema
const TOGGLE_THEME = 'TOGGLE_THEME';

// Función reducer
function themeReducer(state, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}


function App() {
  const initialState = {
    darkMode: false,
  };
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  return (
      <div className={`App ${state.darkMode ? 'dark' : ''}`}>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme}/>
          <Routes>
            <Route path="/" element={Home()}></Route>
            <Route path="/contacto" element={Contact()}></Route>
            <Route path="/favs" element={Favs()}></Route>
            <Route path="/dentist/:id" element={<Detail />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
