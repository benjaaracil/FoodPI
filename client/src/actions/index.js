import axios from "axios"
export const GetRecipes = "GET_RECIPES";
export const GetRecipesID = "GET_RECIPES_ID";
export const PostRecipes = "POST_RECIPES_ID";

export function getRecipes (name){
    return async function (dispatch){
        if (name){
            try{
                // console.log("Nombre", name)
                var json = await (await axios.get(`http://localhost:3001/recipes?name=${name}`)).data
                return dispatch ({
                    type: GetRecipes, 
                    payload: json
                })

            }
            catch(error){
                console.log(error)
                return error;
            }
        }
        else {
            try{
                // console.log("No recibe Nombre")
                var json = await (await axios.get(`http://localhost:3001/recipes/`)).data
                return dispatch ({
                    type: GetRecipes,
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
    return async function (dispatch){
        try{
            var json = await (await axios.get(`http://localhost:3001/recipes/${id}`)).data
            return dispatch ({
                type: GetRecipesID, 
                payload: json
            })
        }
        catch(error){
            console.log(error)
        }
    }
}
export function postRecipes (title, summary, spoonacularScore, healthScore, analyzedInstructions, dietName){
    return async function (dispatch){
        try{
            var json = await (await axios.get(`http://localhost:3001/post`)).data
            return dispatch ({
                type: PostRecipes, 
                payload: json
            })
        }
        catch(error){
            console.log(error)
        }
    }
}