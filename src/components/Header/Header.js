import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
<header className="cabeza row">
        <div className="col-lg-5 col-sm-12 float-start headimage">
            <a href="index.html" className="animate__animated animate__zoomInDown"><img src="/assets/images/logo.png"
                    className="rounded" alt="Logo de la empresa" title="Logo"></img></a>
        </div>
        <NavBar />
    </header>
  );
}

export default Header;