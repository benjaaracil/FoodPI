import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Icon from "../../img/IconChef.png";
import Filter from "../Filters/Filter";
import "./Nav.css";


export default function NavBar(){
return (
    <div className = "Nav">
        {/* <img src={Icon} className = "img" onClick={ () => window.location.href="/home"}/> */}
        <Link to = "/home">
            <img src = {Icon} className = "img"/>
        </Link>
        <SearchBar/>
        <Link className = "LinkCreateRecipe" to='/create'>
            Create Recipe
        </Link>
        <Filter/>
    </div>
    );
}