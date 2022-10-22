import React from "react";
//import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return <SearchBar onSearch={onSearch} />;
}

export default Nav;
