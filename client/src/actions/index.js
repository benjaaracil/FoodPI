import axios from "axios"
export const GetRecipes = "GET_RECIPES";
export const GetRecipesID = "GET_RECIPES_ID";
export const GetRecipesByName = "GET_RECIPES_BYNAME";

export function getRecipes (name){
    return async function (dispatch){
        if (name){
            try{
                var json = await (await axios.get(`http://localhost:3001/recipes?name=${name}`)).data
                return dispatch ({
                    type: "GET_RECIPES", 
                    payload: json
                })
            }
            catch(error){
                console.log(error)
            }
        }
        else {
            try{
                var json = await (await axios.get(`http://localhost:3001/recipes`)).data
                return dispatch ({
                    type: "GET_RECIPES",
                    payload: json
                })
            }
            catch(error){
                console.log(error)
            }
        }
    };
};
export function getRecipesID (id){
    return {
        type: "GET_RECIPES_ID",
        payload: id
    }
}