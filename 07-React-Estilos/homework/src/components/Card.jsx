import React from "react";
import {
  card,
  closeIcon,
  cardTitle,
  cardBody,
  btnCont,
} from "./card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={card}>
      <div className={btnCont}>
        <button onClick={onClose} className={closeIcon}>
          X
        </button>
      </div>
      <h3 className={cardTitle}>{name}</h3>
      <div className={cardBody}>
        <div>
          <label>Min</label>
          <span>{min}</span>
        </div>
        <div>
          <label>Max</label>
          <span>{max}</span>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={"img"}
        />
      </div>
    </div>
  );
}
