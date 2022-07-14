import React from 'react';


const Header = () => {
  return (
<header className="cabeza row">
        <div className="col-lg-5 col-sm-12 float-start headimage">
            <a href="index.html" className="animate__animated animate__zoomInDown"><img src="/assets/images/logo.png"
                    className="rounded" alt="Logo de la empresa" title="Logo"></img></a>
        </div>
        <div className="col-lg-7 col-sm-12 menudis">
            <img src="/assets/images/corazon.png" id="liked" alt="" className="corazon"></img>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="..."></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menunav" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            <a className="nav-link" href="pages/vende.html">Cotiza tu auto</a>
                            <a className="nav-link" href="pages/review.html">Test</a>
                            <a className="nav-link" href="pages/nosotros.html">Conocenos</a>
                            <a className="nav-link" href="pages/contacto.html">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
}

export default Header;