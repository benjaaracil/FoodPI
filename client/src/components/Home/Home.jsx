import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
const [input, setInput] = React.useState("");
     return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            // onSearch(input);
            setInput("");
        }}>
        <div>
            <input placeholder = "Recipe..." onChange = {e => {
                setInput(e.target.value)
                console.log(e.target.value)}
            }/>
            <button>Search</button>
        </div>
        </form>
    )
 }

 export default Home;