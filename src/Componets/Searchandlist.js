// import { ShowCard } from "./card";
import "./Searchandlist.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Appcontext } from "./context";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// import { BsSearch } from "react-icons/bs";

export function Display() {
  const { information, Copy, setCopy } = useContext(Appcontext);

  const [searchValue, setsearchValue] = useState("");
  const [selectValue, setselectValue] = useState("");

  function hadleSearch(e) {
    setsearchValue(e.target.value);
  }
  function hadleselect(e) {
    setselectValue(e.target.value);
  }
  useEffect(() => {
    const temp = information
      ?.filter((country) => {
        if (!selectValue) {
          return true;
        } else {
          return country.region.includes(selectValue);
        }
      })
      .filter((country) => {
        if (
          country.name.common
            .toLocaleLowerCase()
            .includes(searchValue.trim().toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    setCopy(temp);
  }, [searchValue, selectValue]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Search value={searchValue} hadleSearch={hadleSearch} />
        </Col>
        <Col>
          <div className="test">
            <Select selectValue={selectValue} hadleselect={hadleselect} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Search({ value, hadleSearch }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Form>
        <Form.Control
          onChange={hadleSearch}
          type="search"
          placeholder="Search for country..."
          className={
            darkMode ? "homedark search shadow-sm" : "light search shadow-sm"
          }
          aria-label="Search"
          value={value}
        />
        {/* <BsSearch /> */}
      </Form>
    </div>
  );
}
function Select({ selectValue, hadleselect }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <Form.Select
        // size="lg"
        className={
          darkMode ? "homedark select shadow-sm" : "light select shadow-sm"
        }
        onChange={hadleselect}
        value={selectValue}
      >
        <option value=""> Filter by Region</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </Form.Select>
    </div>
  );
}
