import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvaider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector("body");
  darkMode ? (body.className = "dark") : (body.className = "light");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
