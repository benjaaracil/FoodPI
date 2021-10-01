import React from "react";
import "./Landing.css";
import { Link } from 'react-router-dom';

function Landing() {
     return (
        <div className="App">
            <Link to = "/home" className = "LandingButton"> Home </Link>
        </div>
    )
 }

 export default Landing;