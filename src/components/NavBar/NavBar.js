import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchWidget from "../SearchWidget/SearchWidget";

const NavBar = () => {
  return (
    <>
      <div className="col-lg-7 col-sm-12 menudis">
        <Navbar bg="" expand="lg" className="navbar-nav">
          <Container>
            <Navbar.Brand href=""></Navbar.Brand>
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="">
                  <Link to="/suspension">Suspension</Link>
                </Nav.Link>
                <Nav.Link href="">
                  <Link to="/motor">Motor</Link>
                </Nav.Link>
                <Nav.Link href="">
                  <Link to="/freno">Frenos</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="col-lg-2 col-sm-12 menudis">
        <SearchWidget />
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
