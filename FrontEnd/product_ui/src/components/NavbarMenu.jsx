import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ShowProducts from "./ShowProducts";

const NavbarMenu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              <NavLink className="show-products-nav" to="/">Products</NavLink>
              <NavLink className="add-products-nav" to="/add">Add Products</NavLink>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
