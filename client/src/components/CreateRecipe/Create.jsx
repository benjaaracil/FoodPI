import React from "react";
import { useSelector } from "react-redux";
import { postRecipes } from "../../actions";
import NavBar from "../NavBar/NavBar";
import "./Create.css"

export default function Create(){
const dietas = useSelector(state => state.diets);

const [input, setInput] = React.useState({
    title: '',
    summary: '',
    spoonacularScore:0,
    healthScore:0,
    analyzedInstructions:'',
    dietName:[]
  })

const [errors, setErrors] = React.useState({
    title: "",
    summary: ""
})

function validate(input) {
    let errors = {};
    if (!input.title) {
     errors.title ='Title is required'; //el usuario tiene que escribir algo como minimo
    }
    if(!input.summary){
       errors.summary = "Summary is required" //el usuario tiene que escribir algo como minimo
    }
    return errors;
};

function handleSubmit(e){
    e.preventDefault();
    if (!input.title || !input.summary){
        setErrors(validate({title: input.title, summary: input.summary}));
    }
    else {
        postRecipes(input);
        alert ("Recipe created succesfully!");
    };
}

function handleChange(e){
    setErrors({})
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

function handleChangeCheck(e){
    if (e.target.checked === true){
        setInput({
            ...input,
            dietName: [...input.dietName, e.target.name]
        })
    }
    else {
        setInput({
            ...input,
            dietName: input.dietName.filter(dieta => dieta !== e.target.name)
        })
    }
}


// console.log(errors)
    return (
    <div>
        <NavBar/>
        <form onSubmit = {(e) => handleSubmit(e)} className="Form" autocomplete="off">
            <div className = "DivInputs">
                <div className ="DivChiquito">
                    <label className = "Titulo">Title</label>
                    <input value = {input.title} type = "text" name = "title" onChange={(e) => handleChange(e)} ></input>
                </div>
                    <p className = "Error">{errors.title? errors.title :null}</p>
                <div className ="DivChiquito">
                    <label className = "Titulo">Summary</label>
                    <input className = {errors.summary} value = {input.summary} type = "text" name = "summary" onChange={(e) => handleChange(e)}></input>
                </div>
                    <p className = "Error">{errors.summary? errors.summary :null}</p>
                <div className ="DivChiquito">    
                    <label className = "Titulo">Score</label>
                    <input type = "number" min = "0" max = "100" name = "spoonacularScore" onChange={(e) => handleChange(e)}></input>
                </div>
                <div className ="DivChiquito">
                    <label className = "Titulo">Health Score</label>
                    <input type = "number" min = "0" max = "100" name = "healthScore" onChange={(e) => handleChange(e)}></input>
                </div>
                <div className ="DivChiquito">
                    <label className = "Titulo">Instructions</label>
                    <input type = "text" name = "analyzedInstructions" onChange={(e) => handleChange(e)}></input>
                </div>
            </div>
            {/* Checkbox dietas */}
            <div className = "Checking">
                {dietas.map((d,index) => 
                    <div key = {index}>
                        <input className = "CheckingBox"type='checkbox' onChange={(e) => handleChangeCheck(e)} name={d.name} id = {d.id}/>
                        <label>{d.name}</label>
                    </div>
                )}
            </div>
            {/* // */}
            
            {!errors.title && !errors.summary? <button className = "Button" type="submit" >Create Recipe</button> : <button className = "Button" type="submit" disabled>Create Recipe</button>  } 
        </form>
    </div>
    )
}