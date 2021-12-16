import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Icon from "../../img/IconChef.png";
import Filter from "../Filters/Filter";
import "./Nav.css";


export default function NavBar(){
return (
    <nav className = "Nav">
        <Link to = "/home">
            <img src = {Icon} className = "img"/>
        </Link>
        <ul className="menu">
          <li><SearchBar/></li>
          <li><Link className = "LinkCreateRecipe" to='/create'> Create Recipe </Link></li>
          <li><Filter/></li>
        </ul>
        <button className="ham" type="button">
            <span className="br-1"></span>
            <span className="br-2"></span>
            <span className="br-3"></span> 
        </button>
    </nav>
    );
}