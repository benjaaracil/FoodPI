import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesID } from "../../actions";

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
        let diets = rec.recipe.diets;
        let Instructions = rec.recipe.analyzedInstructions[0].steps//Ver como recibe las instrucciones

    return (
        <div>
            <h1>{rec.recipe.title}</h1>
            <h2>Resumen: {rec.recipe.summary}</h2>
            <ul>
                {diets.forEach(element => {
                   <li>Dieta: {element}</li>  //No funca el ForEach
                })}
                <li>Spoonacular Score: {rec.recipe.spoonacularScore}</li>
                <li>Health Score: {rec.recipe.healthScore}</li>
                {/* <li>{rec.recipe.analyzedInstructions}</li> */}
            </ul>
        </div>
    )
}
else return (<div>f en el chat</div>)
}