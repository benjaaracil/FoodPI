export const GetRecipes = "GET_RECIPES";
export const GetRecipesID = "GET_RECIPES_ID";

export function getRecipes (data){
    return {
        type: "GET_RECIPES",
        payload: data
    }
}
export function getRecipesID (id){
    return {
        type: "GET_RECIPES_ID",
        payload: id
    }
}