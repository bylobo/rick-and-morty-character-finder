import React from "react";
import Character from "./Character";

const Personajes = ({ personajes, texto }) => {
  if (personajes.length === 0)
    return <p>No se encontro personajes con {texto}</p>;

  return (
    <section className="lista-personajes">
      {personajes.map((personaje) => (
        <Character key={personaje.id} personaje={personaje} />
      ))}
    </section>
  );
};

export default Personajes;
