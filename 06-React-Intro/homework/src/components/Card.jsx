import React from "react";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div>
        <label>Min</label>
        <span>{min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{max}</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"} />
    </div>
  );
}
