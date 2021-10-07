import React from 'react';
import IconChef from "../../img/IconChef.png"
import "./Card.css"

export default function Card ({img, name, diets}) {
    return (
           <div className = "Card">
            <img src= {img? img: IconChef} className = "Img"/>
            <p>
                Recipe: {name}
            </p>
            <p>
                Type of Diet: {diets}
            </p>
          </div>
    )
};