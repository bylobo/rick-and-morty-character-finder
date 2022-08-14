import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Characters from "./components/Characters";
import Form from "./components/Form";

function App() {
  const [loading, setLoading] = useState(false);
  const [personajes, setPersonajes] = useState([]);
  const [texto, setTexto] = useState("");

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(texto.toLocaleLowerCase())
  );

  return (
    <>
      <Navbar brand="Rick And Morty App" />
      <Form texto={texto} setTexto={setTexto} />
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <Characters texto={texto} personajes={personajesFiltrados} />
      )}
    </>
  );
}

export default App;
