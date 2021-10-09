import {GetRecipes, GetRecipesID, PostRecipes, GetDiets } from "../actions";

const initialState = {
recipes: [],
recipe: {},
diets: [],
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
        case PostRecipes: {
            return {
                ...state
            }
        }
        case GetDiets: {
            return {
                ...state,
                diets: payload
            }
        }
        default: return initialState
    }
}
export default rootReducer;