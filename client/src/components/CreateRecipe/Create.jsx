import React from "react";
import { useDispatch } from "react-redux";
import { postRecipes } from "../../actions";
import "./Create.css"

export default function Create(){
const Diets = [
        'gluten free',
        'ketogenic',
        'vegetarian',
        'lacto ovo vegetarian',
        'vegan',
        'pescatarian',
        'paleolithic',
        'primal',
        'whole 30',
        'fodmap friendly',
        'dairy free',
        ]
const dispatch = useDispatch();

function handleSubmit(){
    dispatch(postRecipes());
}

    return (
        <form onSubmit = {handleSubmit} className="Form">
            <label>title</label>
            <input></input>

            <label>summary</label>
            <input></input>

            <label>spoonacularScore</label>
            <input></input>

            <label>healthScore</label>
            <input></input>

            <label>analyzedInstructions</label>
            <input></input>

            {/* Me faltaria agregar para seleccionar dietas */}
            {/* <input type="checkbox" id="dieta" name="dieta" value="dieta"/>
            <label for={dieta}> dieta </label>
            
            <button>Create Recipe</button> */}
        </form>
    )
}
// Ruta de creación de recetas: debe contener

// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta