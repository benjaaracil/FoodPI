import React from 'react';
import "./Card.css"

export default function Card ({img, name, diets}) {
    return (
           <div className = "Card">
            <img src= {img}/>
            <p>
                {name}
            </p>
            <p>
                {diets}
            </p>
          </div>
    )
};