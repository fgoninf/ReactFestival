import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./IMG/logo.png";
import "./header.css";

function Header() {
    return (
        <div className="Header">
            <div className="header_menu">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={logo}  className="logo-brand" alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Bienvenido</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Conocenos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Galeria</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Compañia De Teatro</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>  
            </div>
    
    </div>
    )
}

export default Header

