import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  // crear los state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  // ciclo de vida
  useEffect(() => {
    // aqui va la logica
    consultaAPI();
  }, []);

  const consultaAPI = async() => {
    // aqui quiero mostrar el spinner
    setCargando(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const result = await respuesta.json();
    console.log(result[0]);
    setTimeout(()=>{
      // guardar el resultado de mi consulta en el state
      setPersonaje(result[0]);
      // quiero mostrar el componente frase
      setCargando(false);
    },3000)
  };

  // operador ternario
  // (condicion logica) ? (que pasa si la condicion se cumple):(que pasa si no se cumple la condicion)
  const mostrarComponente = (cargando) ?  (<Spinner></Spinner>) : (<Frase propiedadPersonaje = {personaje}></Frase>)

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="Logo de los simpsons"
          className="w-75 mb-5"
        />
        <Button variant="warning" className="w-50 mb-5" onClick={() => consultaAPI()}>
          Obtener Frase
        </Button>
      </article>
        {
          mostrarComponente
        }
    </section>
  );
}

export default App;
