import React from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions";
import "./SearchBar.css"


export default function SearchBar(){
const [input, setInput] = React.useState("");
const dispatch = useDispatch();

async function handleSubmit(e){
    e.preventDefault();
            try {
                dispatch(await getRecipes(input))
            }
            catch(error){
                alert(error);
            }
    setInput("");
}
function handleChange(e){
    setInput(e.target.value)
    // console.log(e.target.value)
}

return (
    <form onSubmit = {handleSubmit} className = "Search">
            <input placeholder = "Recipe..." onChange = {handleChange} className = "input"/>
            <button type = "submit" className = "button">Search</button>
    </form>
    );
}