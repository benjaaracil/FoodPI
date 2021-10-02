export const GetRecipes = "GET_RECIPES";
export const GetRecipesID = "GET_RECIPES_ID";
export const GetRecipesByName = "GET_RECIPES_BYNAME";

export function getRecipes (name){
    return function (dispatch){
        if (name){
            return fetch(`http://localhost:3001/recipes?name=${name}`)
                .then(response => response.json())
                .then(json => {
                  dispatch({ type: "GET_RECIPES", payload: json });
                });
        }
        else {
            return fetch(`http://localhost:3001/recipes`)
                .then(response => response.json())
                .then(json => {
                  dispatch({ type: "GET_RECIPES", payload: json });
                });
        }
    };
};
export function getRecipesID (id){
    return {
        type: "GET_RECIPES_ID",
        payload: id
    }
}