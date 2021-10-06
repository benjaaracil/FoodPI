import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Icon from "../../img/IconChef.png"
import "./Nav.css"


export default function NavBar(){

return (
    <div className = "Nav">
        <img src={Icon} className = "img" onClick={ () => window.location.reload()}/>
        <SearchBar/>
    </div>
    );
}