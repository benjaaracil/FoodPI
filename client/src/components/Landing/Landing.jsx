import React from "react";
import "./Landing.css";
import { Link } from 'react-router-dom';
import Logo from "../../img/IconChef.png";

function Landing() {
    return (
        <div className="contenedorGeneral">
        <div className="landingContainer">
            <h1 className="Content">
                <Link to="/home" className="Link"> Home </Link>
            </h1>
            <h2 className="Join">
                Where the chefs are made
            </h2>
            <img src={Logo} className="Logo" alt="LogoChef" />
        </div>
        </div>
    )
}

export default Landing;