import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesID } from "../../actions";
import ImagenRecetaDB from "../../img/ImagenRecetaDB.jpg";

export default function Detail (props){
    const dispatch = useDispatch();
    const rec = useSelector(state => state);
    // console.log(props.match.params.id);

    React.useEffect(() => {
        (async () => {
            dispatch(await getRecipesID(props.match.params.id))
        })()
      },[])

      console.log(rec);
    // console.log(Object.keys(rec).length)
    
    if (rec){
        // let Instructions = rec.recipe.analyzedInstructions[0].steps//Ver como recibe las instrucciones

    return (
        <div>
            <h1>{rec.recipe.title}</h1>
            <img src={rec.recipe.image? rec.recipe.image : ImagenRecetaDB}/> 
            <ul>
                <li>Dieta: {rec.recipe.diets? rec.recipe.diets : rec.recipe.dieta}</li>
                <li>Spoonacular Score: {rec.recipe.spoonacularScore}</li>
                <li>Health Score: {rec.recipe.healthScore}</li>
                <li>Tipo de Plato: {rec.recipe.dishTypes}</li>
                {/* <li>{rec.recipe.analyzedInstructions}</li> */}
            </ul>
            {rec.recipe.summary?.replace(/<[^>]*>?/gm, '')}
        </div>
    )
}
else return (<div>f en el chat</div>)
}