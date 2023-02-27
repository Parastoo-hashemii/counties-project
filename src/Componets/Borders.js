import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DitailCountry.css";
import { ThemeContext } from "./ThemeContext";

export const Borders = ({ data }) => {
  const [border, setborde] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${data.join(",")}`)
      .then((res) => res.json())
      .then((fetchData) => setborde(fetchData));
  }, [data.join(",")]);

  return (
    <div className="divBorder">
      <p className={darkMode ? "pdark" : "light"}>borders countries:</p>
      <div id="allborders">
        {border?.map((cb) => {
          return (
            <Link
              to={`/country/${cb.name.common.split(" ").join("-")}`}
              key={cb.cioc}
            >
              <button
                type="button"
                className={
                  darkMode
                    ? "bt-colordark  btn  btn-sm mx-1  "
                    : " btn  btn-sm  btn-light mx-1 "
                }
              >
                {cb.name.common}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
