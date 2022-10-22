import React, { useRef } from "react";
import "./Timer.css";
// import { useState, useEffect } from "react";

const Timer = () => {
  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState("Contador");
  const myRef = useRef(null);

  React.useEffect(() => {
    let interval = null;
    if (activo && tipo === "Contador") {
      interval = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
    if (activo && tipo === "Cuenta Regresiva") {
      interval = setInterval(() => {
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === "Contador") {
      clearInterval(interval);
    }
    if (segundos === 0 && tipo === "Cuenta Regresiva") {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [activo, tipo, segundos]);

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    tipo === "Contador" ? setTipo("Cuenta Regresiva") : setTipo("Contador");
  }

  function onChange() {
    let value = myRef.current.value;
    setSegundos(value);
  }
  return (
    <div className="app">
      <div className="time">{segundos} segundos</div>
      <div className="row">
        <button
          onClick={toggle}
          className={`button button-primary button-primary-${
            activo ? "active" : "inactive"
          }`}
        >
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
      <button onClick={cambioTipo} className="button">
        {tipo}
      </button>
      {tipo === "Cuenta Regresiva" && (
        <input
          onChange={onChange}
          ref={myRef}
          type="number"
          placeholder="Ingresa Segundos"
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Timer;
