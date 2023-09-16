import React, { useState, useEffect } from 'react';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //Aqui deberan implementar el form completo con sus validaciones

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const sendContact = (e) => {
    e.preventDefault()
    if(!validateEmail(email)){
      alert("Email incorrecto")
      return
    }

    if(name.length < 5){
      alert("El nombre debe tener al menos 5 caracteres")
      return
    }

    alert("Gracias! Nos contactaremos a la brevedad vía mail")
    setEmail("")
    setName("")
  }
  return (
    <div className="contact">

      <h1>Contáctenos</h1>
      <div className="form">
        <form onSubmit={(e) => sendContact(e)}>
          <input type="email" placeholder="Ingrese el mail" value={email} onChange={(event) => {setEmail(event.target.value)}}></input>
          <input type="text" placeholder="Ingrese su nombre completo" value={name} onChange={(event) => {setName(event.target.value)}}></input>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
