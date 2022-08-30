import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    
    <div className="col-lg-7 col-sm-12 menudis">
    <CartWidget />
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="..."></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menunav"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                <p className="navbarFont" >Home</p>
              </Link>
              <Link className="nav-link" to="/suspension">
              <p className="navbarFont" >Suspension</p>
              </Link>
              <Link className="nav-link" to="/motor">
              <p className="navbarFont" >Motor</p>
              </Link>
              <Link className="nav-link" to="/freno">
              <p className="navbarFont" >Frenos</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default NavBar;
