// import { useEffect, useState } from "react";
// import "./Searchandlist.css";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { BsMoon } from "react-icons/bs";

export const Theme = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      type="button"
      class="btn btn-outline-dark size"
      onClick={handeTheme}
    >
      <BsMoon /> Dark mode
    </button>
  );
};
