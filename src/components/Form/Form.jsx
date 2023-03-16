import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Form = () => {

  const [userData, setUserData] = useState({ name: "", email: "" });
  const [noVocales, setNoVocales] = useState("");

  const navigate = useNavigate();

  const cancel = () => {
    console.log("se cancelo el formulario");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userData);
    navigate("/");
  };

  const handleKey = (event) => {
    if (
      event.key.toLowerCase() === "a" ||
      event.key.toLowerCase() === "e" ||
      event.key.toLowerCase() === "i" ||
      event.key.toLowerCase() === "o" ||
      event.key.toLowerCase() === "u"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h1>Formulario - eventos</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          value={userData.email}
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
        />

        <input
          type="text"
          placeholder="Ingrese su email"
          name="noVocales"
          value={noVocales}
          onChange={(event) => setNoVocales(event.target.value)}
          onKeyDown={handleKey}
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={cancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Form;
