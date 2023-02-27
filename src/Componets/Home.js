import { ShowCard } from "./Card";
import TextLinkExample from "./Navbar";
import { Display } from "./Searchandlist";
import { useContext, useState } from "react";
import { Appcontext } from "./context";
// import { Route, Routes } from "react-router-dom";
// import { DitailCountry } from "./DitailCountry";
// import { ThemeContext } from "./ThemeContext";

function Home() {
  const [information, setInformation] = useState(null);
  const [Copy, setCopy] = useState();
  // const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <TextLinkExample />

      <Appcontext.Provider
        value={{ information, setInformation, Copy, setCopy }}
      >
        <Display />
        <ShowCard />
      </Appcontext.Provider>
    </>
  );
}
export default Home;
