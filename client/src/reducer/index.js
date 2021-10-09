import {GetRecipes, GetRecipesID, PostRecipes, GetDiets, FilterByAlphabetic } from "../actions";

const initialState = {
recipes: [],
recipesCopy: [],
recipe: {},
diets: [],
}
function rootReducer (state = initialState, {type, payload}){
    switch (type){
        case GetRecipes:
            return{
                ...state,
                recipes: payload,
                recipesCopy: payload
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
        case FilterByAlphabetic: {
            if (payload === "ASC"){
                return {
                    ...state,
                    recipes: state.recipesCopy.sort(function (a, b) {
                            if (a.title > b.title) {
                              return 1;
                            }
                            if (a.title < b.title) {
                              return -1;
                            }
                            return 0
                        })
                }
            }
            else {
                return {
                    ...state,
                    recipes: state.recipesCopy.sort(function (a, b) {
                            if (a.title < b.title) {
                              return 1;
                            }
                            if (a.title > b.title) {
                              return -1;
                            }
                            return 0
                        })
                }
            }
        }
        default: return initialState
    }
}
export default rootReducer;