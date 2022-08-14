import React from "react";
import "../Styles/Form.css";

const Form = ({ texto, setTexto }) => {
  const handleInputChange = ({ target }) => {
    setTexto(target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="filtrar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="buscar"
            placeholder="Nombre del personaje"
            value={texto}
            onChange={handleInputChange}
          />
        </form>
      </section>
    </>
  );
};

export default Form;
