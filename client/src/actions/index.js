import axios from "axios"
export const GetRecipes = "GET_RECIPES";
export const GetRecipesID = "GET_RECIPES_ID";
export const PostRecipes = "POST_RECIPES_ID";
export const GetDiets = "GET_DIETS";
export const FilterByAlphabetic = "FILTER_BY_ALPHABETIC";
export const FilterByScore = "FILTER_BY_SCORE";
export const FilterByDiet = "FILTER_BY_DIET"

export function getRecipes (name){
    return async function (dispatch){
        if (name){
            try{
                let json = (await axios.get(`/recipes?name=${name}`)).data
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
                let json = (await axios.get(`/recipes`)).data
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
            var json = (await axios.get(`/recipes/${id}`)).data
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
export async function postRecipes (input){
        try{
            await axios.post(`/recipe`, input)
        }
        catch(error){
            console.log(error)
        }
    }
export async function getDiets(){
    return async function (dispatch){
        try{
            var json = (await axios.get(`/types`)).data
            return dispatch ({
                type: GetDiets, 
                payload: json
            })
        }
        catch(error){
            console.log(error)
        }
    }
}
export function filterByAlphabetic(Order){
    return {
        type: FilterByAlphabetic,
        payload: Order
    }
}
export function filterByScore(Order){
    return {
        type: FilterByScore,
        payload: Order
    }
}
export function filterByDiet(Diet){
    return {
        type: FilterByDiet,
        payload: Diet
    }
}

// export function getDiets(){
//     return function(){
//         return axios.get(`http://localhost:3001/types`).data
//             .then(res => {
//               return {type: GetDiets, payload: res}
//             })
//             .catch(err =>{
//                 console.log(err.message)
//             })
//     }
// }