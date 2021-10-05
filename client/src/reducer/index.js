import {GetRecipes, GetRecipesID } from "../actions";

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
    }
}
export default rootReducer;