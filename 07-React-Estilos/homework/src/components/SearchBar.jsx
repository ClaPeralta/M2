import React from "react";
import {} from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type={`text`} placeholder={`Buscar ciudad...`} />
      <button onClick={() => onSearch(`Una Ciudad`)}>Agregar</button>
    </div>
  );
}
