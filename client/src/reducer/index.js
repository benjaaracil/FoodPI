import {GetRecipes, GetRecipesID, PostRecipes, GetDiets, FilterByAlphabetic, FilterByScore, FilterByDiet } from "../actions";

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
                    recipes: state.recipes.sort(function (a, b) {
                            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                              return 1;
                            }
                            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                              return -1;
                            }
                            return 0
                        })
                }
            }
            else {
                return {
                    ...state,
                    recipes: state.recipes.sort(function (a, b) {
                            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                              return 1;
                            }
                            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                              return -1;
                            }
                            return 0
                        })
                }
            }
        }
        case FilterByScore: {
            if (payload === "MaxMin"){
                return {
                    ...state,
                    recipes: state.recipes.sort(function (a, b) {
                        // console.log(a.spoonacularScore, b.spoonacularScore)
                        if (a.spoonacularScore < b.spoonacularScore) {
                            
                            return 1;
                          }
                        else if (a.spoonacularScore > b.spoonacularScore) {
                            return -1;
                          }
                        })
                }
            }
            else {
                return {
                    ...state,
                    recipes: state.recipes.sort(function (a, b) {
                        if (a.spoonacularScore > b.spoonacularScore) {
                            return 1;
                          }
                        else if (a.spoonacularScore < b.spoonacularScore) {
                            return -1;
                          }
                        })
                }
            }
        }
        case FilterByDiet: {
            if (payload === "ALL"){
                return {
                    ...state,
                    recipes: state.recipesCopy
                }
            }
            return {
                ...state,
                recipes: state.recipes.filter(e=> e.diets?.includes(payload))
            }

        }
        default: return initialState
    }
}
export default rootReducer;