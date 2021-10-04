import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesID } from "../../actions";

export default function Detail (props){
    const dispatch = useDispatch();
    const rec = useSelector((state) => state);

    console.log(rec);
    // console.log(props.match.params.id);

    React.useEffect(() => {
        (async () => {
            dispatch(await getRecipesID(props.match.params.id))
        })()
      },[])

      if (rec && rec.recipe.length){
    return (
        <div>
            {/* <h1>hola</h1> */}
            <h1>{rec.recipe.title}</h1>
            <ul>
                <li>{rec.recipe.diets}</li>
                <li>{rec.recipe.spoonacularScore}</li>
                <li>{rec.recipe.summary}</li>
                <li>{rec.recipe.healthScore}</li>
                <li>{rec.recipe.analyzedInstructions}</li>
            </ul>
        </div>
    )
}


}