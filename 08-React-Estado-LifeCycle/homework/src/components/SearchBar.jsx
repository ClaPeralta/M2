import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const HandleInputChange = (e) => {
    console.log(e);
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
      }}
    >
      <input
        onChange={HandleInputChange}
        type="text"
        placeholder="Ciudad..."
        value={input}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
