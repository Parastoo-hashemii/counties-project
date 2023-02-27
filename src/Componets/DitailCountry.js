import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TextLinkExample from "./Navbar";
import Image from "react-bootstrap/Image";
import "./DitailCountry.css";
import { Borders } from "./Borders";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";

export const DitailCountry = () => {
  const { name } = useParams();

  //const countryName = name.split("-").join(" ");
  // console.log(countryName);
  const [ditail, setditail] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${name
        .split("-")
        .join(" ")}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setditail(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [name]);

  const renderDitail = (item, index) => {
    return (
      <div>
        <TextLinkExample />

        <Link to={"/"}>
          <button
            type="button"
            className={
              darkMode
                ? "bt-colordark btn btn-sm Button"
                : " btn btn-light btn-sm  Button"
            }
          >
            {<BsArrowLeft />} Back
          </button>
        </Link>

        <section
          className="cardfrist"
          // className=
        >
          <Container>
            <Row md={8}>
              <Col>
                <Image
                  src={item.flags.svg}
                  className="img-fluid image"
                  alt={item.flags.alt}
                />
              </Col>
              <Col className="left mx-4 " lg={6}>
                <h3>{item.name.common}</h3>

                <Row>
                  <Col sm={6}>
                    <p className={darkMode ? "pdark" : "light"}>
                      Native Name:
                      <span>
                        {Object.values(item.name.nativeName)[0].common}
                      </span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      Population:<span>{item.population}</span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      Region:<span>{item.region}</span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      SubRegion:<span> {item.subregion}</span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      capital:<span>{item.capital}</span>
                    </p>
                  </Col>
                  <Col className="my-1">
                    <p className={darkMode ? "pdark" : "light"}>
                      Top Level Domain:<span>{item.tld}</span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      Currencies:{" "}
                      <span>{Object.values(item.currencies)[0].name}</span>
                    </p>
                    <p className={darkMode ? "pdark" : "light"}>
                      languages:
                      <span>{Object.values(item.languages).join(", ")}</span>
                    </p>
                  </Col>
                  <div className="my-4" md={5}>
                    {item.borders?.length ? (
                      <Borders data={item.borders} />
                    ) : null}
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  };

  return <div>{ditail ? ditail.map(renderDitail) : <h1>loding...</h1>}</div>;
};
