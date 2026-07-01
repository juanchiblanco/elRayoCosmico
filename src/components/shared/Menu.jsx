import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";

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
              <NavLink to="/" className="link-light nav-link">
                Inicio
              </NavLink>
              <NavLink to="/discografia" className="link-light nav-link">
                Música
              </NavLink>
              <NavLink to="/videos" className="link-light nav-link">
                Videos
              </NavLink>
              <NavLink to="/seguime" className="link-light nav-link">
                Redes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
