import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesID } from "../../actions";
import ImagenRecetaDB from "../../img/ImagenRecetaDB.jpg";
import NavBar from "../NavBar/NavBar"
import "../DetailRecipe/Detail.css"

export default function Detail (props){
    const dispatch = useDispatch();
    const rec = useSelector(state => state);
    // console.log(props.match.params.id);

    React.useEffect(() => {
        (async () => {
            dispatch(await getRecipesID(props.match.params.id))
        })()
      },[dispatch, props.match.params.id])

      
    // console.log(Object.keys(rec).length)
    
    if (rec){
    return (
        <div className = "DetailCss">
            <NavBar/>
            <div className = "Box">
                {Array.isArray(rec.recipe)? <h1 className = "Title">{rec.recipe[0].title}</h1>: <h1 className = "Title">{rec.recipe.title}</h1>}
                <img className = "ImageRecipe"src={rec.recipe.image? rec.recipe.image : ImagenRecetaDB}/> 
                <ul className = "Tips">
                    <li>Diet: {Array.isArray(rec.recipe)?rec.recipe[0].diets.join(", "):rec.recipe.diets}</li>
                    <li>Score: {Array.isArray(rec.recipe)?rec.recipe[0].spoonacularScore:rec.recipe.spoonacularScore}</li>
                    <li>Health Score: {Array.isArray(rec.recipe)?rec.recipe[0].healthScore:rec.recipe.healthScore}</li>
                    <li>Dish type: {rec.recipe.dishTypes? rec.recipe.dishTypes: "Not Available"}</li>
                </ul>
                <div className = "Resumen">
                 {Array.isArray(rec.recipe)?rec.recipe[0].summary:rec.recipe.summary?.replace(/<[^>]*>?/gm, '')}
                </div>
                <h1 className = "TitleStep">
                    Step by Step!
                <ul className = "Pasos">
                    {Array.isArray(rec.recipe.analyzedInstructions)? rec.recipe.analyzedInstructions.map(p => <li key={p.number + p.step.slice(0,4)}>{p.step}</li>) : null }
                    {Array.isArray(rec.recipe)? rec.recipe[0].analyzedInstructions : "Not available"}
                </ul>

                </h1>
            </div>
        </div>
    )
}
else return (<div>Cargando...</div>)
}