import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className={"p-3 p-lg-4 bgNavBar"}>
        <Container className="justify-content-end justify-content-lg-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start justify-content-lg-center"
          >
            <Nav className="text-start text-lg-center">
              <Nav.Link href="#home" className="link-light">
                Inicio
              </Nav.Link>
              <Nav.Link href="#canciones" className="link-light">
                Canciones
              </Nav.Link>
              <Nav.Link href="#videos" className="link-light">
                Videos
              </Nav.Link>
              <Nav.Link href="#contacto" className="link-light">
                Sobre mí
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
