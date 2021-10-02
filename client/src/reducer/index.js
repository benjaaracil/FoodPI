import {GetRecipes, GetRecipesID, GetRecipesByName} from "../actions";

const initialState = {
recipes: [],
recipe: [],
}
function rootReducer (state = initialState, {type, payload}){
    switch (type){
        case GetRecipes:
            return{
                ...state,
                recipes: payload
            }
        case GetRecipesID:{
            return {
                ...state,
                recipe: payload 
            }
        }
        case GetRecipesByName:{
            return {
                ...state,
                recipes: payload
            }
        }
    }
}
export default rootReducer;