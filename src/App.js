// import logo from './logo.svg';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import "bootstrap/dist/css/bootstrap.min.css";
// import TextLinkExample from "./Navbar";
// import { ShowCard } from "./Card";
// import { Display } from "./Searchandlist";

import { Route, Routes } from "react-router-dom";
import { DitailCountry } from "./Componets/DitailCountry";
import Home from "./Componets/Home";

function App() {
  // const [information, setInformation] = useState(null);
  // return (
  //   <>
  //     <TextLinkExample />
  //     <Appcontext.Provider value={{ information, setInformation }}>
  //       <Display />
  //       <ShowCard />
  //     </Appcontext.Provider>
  //     {/* <BasicExample /> */}
  //   </>
  // );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<DitailCountry />} />
    </Routes>
  );
  // return <Home />;
}
export default App;
