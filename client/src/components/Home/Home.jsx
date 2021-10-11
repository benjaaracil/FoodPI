import React from "react";
// import SearchBar from "../SearchBar/SearchBar" Dentro de NavBar pongo mi SearchBar
import Cards from "../RecipeCards/Cards";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

function Home() {
     return (
        <div className = "home">
            <NavBar/>      
            <Cards/>
            
        </div>
    )
 }

 export default Home;