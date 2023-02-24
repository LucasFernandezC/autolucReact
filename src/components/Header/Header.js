import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import "./Header.css";

const Header = () => {
  return (
<header className="cabeza row ">
        <div className="col-lg-3 col-sm-12 float-start headimage">
            <Link to="/" className="animate__animated animate__zoomInDown"><img src="/assets/images/logo.png"
                    className="rounded" alt="Logo de la empresa" title="Logo"></img></Link>
        </div>
        <NavBar />
    </header>
  );
}

export default Header;