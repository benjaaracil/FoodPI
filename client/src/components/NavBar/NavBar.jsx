import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Icon from "../../img/IconChef.png";
import Filter from "../Filters/Filter";
import "./Nav.css";


export default function NavBar(){

const enlaces = useRef(null);
const barra1 = useRef(null);
const barra2 = useRef(null);
const barra3 = useRef(null);
// const ham = document.querySelector(".ham");
// const enlaces = document.querySelector("menu");
// const barras = document.querySelectorAll(".ham span");

function handleClick(){
    enlaces.current.classList.toggle("activado")
    console.log("Antes", barra1.current)
    console.log("Antes", barra2.current)
    console.log("Antes", barra3.current)
    barra1.current.classList.toggle("animado")
    barra2.current.classList.toggle("animado")
    barra3.current.classList.toggle("animado")
    console.log("Despues", barra1.current)
    console.log("Despues", barra2.current)
    console.log("Despues", barra3.current)
}

return (
    <nav className = "Nav">
        <Link to = "/home">
            <img src = {Icon} className = "img"/>
        </Link>
        <ul className="menu" ref={enlaces}>
          <li><SearchBar/></li>
          <li><Link className = "LinkCreateRecipe" to='/create'> Create Recipe </Link></li>
          <li><Filter/></li>
        </ul>
        <button onClick = {handleClick}className="ham" type="button">
            <span ref={barra1} className="br-1"></span>
            <span ref={barra2} className="br-2"></span>
            <span ref={barra3} className="br-3"></span> 
        </button>
    </nav>
    );
}