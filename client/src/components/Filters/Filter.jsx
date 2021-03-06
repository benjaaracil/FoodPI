import React from "react";
import { getDiets, filterByAlphabetic, filterByScore, filterByDiet } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Filtrado from "../Filters/Filter.css"



export default function Filter () {
    const dispatch = useDispatch();
    const dietas = useSelector(state => state.diets);
    
    //Me traigo las dietas cuando se renderiza el NavBar
    React.useEffect(() => {
        (async () => {
            dispatch(await getDiets())
        })()
      },[])

    //Despacho la accion de ordenado por Orden Alfabeticamente
    function handleSelectAlphabetic(e){
        dispatch(filterByAlphabetic(e.target.value))
    }
    
    //Despacho la accion de ordenado por Score
    function handleSelectScore(e){
        dispatch(filterByScore(e.target.value))
        
    }
    
    function handleSelectDiet(e){
        dispatch(filterByDiet(e.target.value))
    }
    
    return (
        <div className = "Filter">
            <select className = "Letter" onChange={handleSelectAlphabetic} name="A-Z/Z-A">
                <option value="OrderByASC" disabled defaultValue>Order by letter</option>
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
            <select className = "Letter" onChange={handleSelectScore} name="Score">
                <option value="OrderByScore" disabled defaultValue>Order by Score</option>
                <option value="MaxMin">Max-Min score</option>
                <option value="MinMax">Min-Max score</option>
            </select>
            <select className = "Letter" onChange={handleSelectDiet}name="Dietas">
            <option value="OrderByDiets" disabled defaultValue>Order by Diets</option>
            <option value="ALL">All</option>
            {dietas.map(d => 
                <option key ={d.name} value = {d.name}>{d.name}</option>
            )}
            </select>
        </div>
    )

}