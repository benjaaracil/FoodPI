import React from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions";


export default function SearchBar(){
const [input, setInput] = React.useState("");
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getRecipes(input));
  }, [input, dispatch]);

function handleSubmit(e){
    e.preventDefault();
        dispatch(input);
        setInput("");
}
function handleChange(e){
    setInput(e.target.value)
    // console.log(e.target.value)
}

return (
    <form onSubmit = {handleSubmit}>
        <div>
            <input placeholder = "Recipe..." onChange = {handleChange}/>
            <button>Search</button>
        </div>
    </form>
    );
}