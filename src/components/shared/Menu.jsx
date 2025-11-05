import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertary">
        <Container>
          <NavLink to="/" className="navbar-brand arapey">
            El Rayo Cósmico
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
              <NavLink className="nav-link" to={"/sobreNosotros"}>
                Sobre nosotros
              </NavLink>
              <NavLink className="nav-link" to={"/contacto"}>
                Contacto
              </NavLink>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
