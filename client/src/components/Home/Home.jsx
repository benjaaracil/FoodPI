import React from "react";
import NavBar from "../SearchBar/SearchBar"
import "./Home.css";
import Cards from "../RecipeCards/Cards";

function Home({onSearch}) {

     return (
        <div>
            <NavBar
                onSearch={onSearch}
            />
            <Cards/>
            
        
        
        
        </div>
        
    )
 }

 export default Home;