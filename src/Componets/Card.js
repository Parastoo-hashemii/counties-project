import { useEffect } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { Appcontext } from "./context";
import { Link } from "react-router-dom";
// import { DitailCountry } from "./DitailCountry";
import { ThemeContext } from "./ThemeContext";
import "./DitailCountry.css";
import "./Theme.css";

export function ShowCard() {
  const { information, setInformation, Copy, setCopy } = useContext(Appcontext);
  const { darkMode } = useContext(ThemeContext);
  console.log(darkMode);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInformation(data);
        setCopy(data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const renderCard = (card, index) => {
    return (
      <Col className="my-4">
        <Card
          style={{ width: "18rem", height: "25rem" }}
          key={index}
          className="card border-0 shadow"
        >
          <Link to={`/country/${card.name.common.split(" ").join("-")}`}>
            <Card.Img
              variant="top"
              src={card.flags.png}
              style={{ objectFit: "cover", width: "18rem", height: "12rem" }}
            />
          </Link>
          <Card.Body
            className={darkMode ? "homedark fw-semibold" : "light fw-semibold"}
          >
            <Card.Title className="fw-bold">{card.name.common}</Card.Title>
            <Card.Text
              className={
                darkMode ? "homedark fw-semibold" : "light fw-semibold"
              }
            >
              Population:<span>{card.population}</span>
            </Card.Text>
            <Card.Text
              className={
                darkMode ? "homedark fw-semibold" : "light fw-semibold"
              }
            >
              Region:
              <span>{card.region}</span>
            </Card.Text>
            <Card.Text
              className={
                darkMode ? "homedark fw-semibold" : "light fw-semibold"
              }
            >
              Capita:<span>{card.capital}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row>{Copy ? Copy.map(renderCard) : <h1>loding...</h1>}</Row>
    </Container>
  );
}
