import React from "react";
//Importando Link
import { Link } from "react-router-dom";
//Importando logo
import logo from "../images/logo.svg";
//Importando estilos
import "./styles/Navbar.css";

//Creando componente
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="logo" />
                    <span className="fw-light">Platzi</span>
                    <span className="fw-bold">Conf</span>
                </Link>
            </div>
        </div>
    );
};

//Exportando componente
export default Navbar;
