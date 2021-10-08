import React from 'react';
import IconChef from "../../img/IconChef.png"
import "./Card.css"

export default function Card ({img, name, diets}) {
    //Paso el array a string para que me separe en comas
    diets = diets.toString()
    return (
           <div className = "Card">
            <img src= {img? img: IconChef} className = "Img"/>
            <h1 className = "TitleCard">
                {/* Nombre receta */}
                {name}
            </h1>
            <p className = "DietDetail"> 
                Type of Diet: {diets}
            </p>
          </div>
    )
};