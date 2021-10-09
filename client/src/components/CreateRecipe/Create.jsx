import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipes } from "../../actions";
import { getDiets } from "../../actions";
import "./Create.css"

export default function Create(){
const dispatch = useDispatch();
const dietas = useSelector(state => state.diets);


React.useEffect(() => {
    (async () => {
        dispatch(await getDiets())
    })()
  },[])

// console.log(dietas)


const [input, setInput] = React.useState({
    title: '',
    summary: '',
    spoonacularScore:0,
    healthScore:0,
    analyzedInstructions:'',
    dietName:[]
  })
//   console.log(input)

function handleSubmit(e){
    e.preventDefault();
    postRecipes(input);
}

function handleChange(e){
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


// onSubmit = {(e) => handleSubmit(e)}
    return (
        <form onSubmit = {(e) => handleSubmit(e)} className="Form">
            <div>
                <label>Title</label>
                <input type = "text" name = "title" onChange={(e) => handleChange(e)} ></input>

                <label>Summary</label>
                <input type = "text" name = "summary" onChange={(e) => handleChange(e)}></input>

                <label>Score</label>
                <input type = "integer" name = "spoonacularScore" onChange={(e) => handleChange(e)}></input>

                <label>Health Score</label>
                <input type = "integer" name = "healthScore" onChange={(e) => handleChange(e)}></input>

                <label>Instructions</label>
                <input type = "text" name = "analyzedInstructions" onChange={(e) => handleChange(e)}></input>
            </div>
            {/* Checkbox dietas */}
            <div>
                {/* {console.log("Dietas", dietas)} */}
                {dietas.map(d => 
                    <div>
                        <label>{d.name}</label>
                        <input type='checkbox' onChange={(e) => handleChangeCheck(e)} name={d.name} id = {d.id}/>
                    </div>
                )}
            </div>
            {/* // */}
            
            <button type="submit">Create Recipe</button> 
        </form>
    )
}
// Ruta de creación de recetas: debe contener

// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta