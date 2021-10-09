import React from "react";
import { getDiets, filterByAlphabetic } from "../../actions";
import { useDispatch, useSelector } from "react-redux";



export default function Filter () {
    const dispatch = useDispatch();
    const dietas = useSelector(state => state.diets);
    
    //Me traigo las dietas
    React.useEffect(() => {
        (async () => {
            dispatch(await getDiets())
        })()
      },[])

    function handleSelectAlphabetic(e){
        dispatch(filterByAlphabetic(e.target.value))
    }
    
    
    
    return (
        <div>
            <select onChange={handleSelectAlphabetic} name="A-Z/Z-A">
                <option value="Order By" disabled>Order</option>
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
            <select name="Score">
                <option value="Order By" disabled>Order by Score</option>
                <option value="0-25">0-25</option>
                <option value="0-25">0-25</option>
                <option value="25-50">25-50</option>
                <option value="50-100">50-100</option>
            </select>
            <select name="Dietas">
            {dietas.map(d => 
                <option value = {d.name}>{d.name}</option>
            )}
            </select>
        </div>
    )

}