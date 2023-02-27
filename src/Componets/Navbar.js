import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Theme } from "./Theme";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function TextLinkExample() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "homedark" : "light"}>
      <Navbar className="shadow sm  " style={{ width: "100%" }}>
        <Container style={{ width: "100%" }}>
          <Navbar.Brand className={darkMode ? "homedark" : "light"} href="#">
            Where in the World?
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Theme />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TextLinkExample;
