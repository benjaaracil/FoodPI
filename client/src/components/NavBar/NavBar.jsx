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
const navegador = useRef(null);

function handleClick(){
    enlaces.current.classList.toggle("activado")
    barra1.current.classList.toggle("animado")
    barra2.current.classList.toggle("animado")
    barra3.current.classList.toggle("animado")
    navegador.current.classList.toggle("animado")
}

return (
    <nav ref={navegador} className = "Nav">
        <Link className = "LinkImg" to = "/home" >
            <img src = {Icon} className = "img"/>
        </Link>
        <ul className="menu" ref={enlaces}>
          <li className="l1"><SearchBar/></li>
          <li className="l2"><Link className = "LinkCreateRecipe" to='/create'> Create Recipe </Link></li>
          <li className="l3"><Filter/></li>
        </ul>
        <button onClick = {handleClick}className="ham" type="button">
            <span ref={barra1} className="br-1"></span>
            <span ref={barra2} className="br-2"></span>
            <span ref={barra3} className="br-3"></span> 
        </button>
    </nav>
    );
}