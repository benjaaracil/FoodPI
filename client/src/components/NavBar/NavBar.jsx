import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import CreateRecipe from "../CreateRecipe/Create";
import Icon from "../../img/IconChef.png";
import "./Nav.css";


export default function NavBar(){

return (
    <div className = "Nav">
        <img src={Icon} className = "img" onClick={ () => window.location.path="/home"}/>
        <SearchBar/>
        <Link className = "LinkCreateRecipe" to='/create'>
            Create Recipe
        </Link>
    </div>
    );
}