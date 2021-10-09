import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
import { getRecipes, getDiets } from '../../actions';
import "./Cards.css"
import Card from '../RecipeCard/Card';
import { Link } from 'react-router-dom';


export default function Cards () {
const allCards = useSelector((state) => state);
const dispatch = useDispatch();
// const [orden, setOrden] = useState();

//Me traigo las dietas-------------------------------
const dietas = useSelector(state => state.diets);


React.useEffect(() => {
    (async () => {
        dispatch(await getDiets())
    })()
  },[])
//Me traigo las dietas--------------------------------------

//PAGINADO------------------------------------------------------------------------------
//Estado para el paginado
const [current, setCurrent] = useState(0)


React.useEffect(() => {
    (async () => {
        //Si hago una nueva busqueda se posiciona de nuevo en la primer pag:
        setCurrent(0)
        //
        dispatch(await getRecipes())
    })()
  },[])

  const lastPage = () => {
    if(current > 0){
      setCurrent( current - 9)
    }
  }
   const nextPage = () => {
    if(current < allCards.recipes.length - 9){
      setCurrent( current + 9)
    }
  }

if (allCards && allCards.recipes.length){
    //Paginado
    let recipesToShow;
    recipesToShow = allCards.recipes.slice(current, current + 9)

//PAGINADO------------------------------------------------------------------------------

//Hago el ordenado alfabético-----------------------

// allCards.recipes.sort(function (a, b) {
//     if (a.title < b.title) {
//       return 1;
//     }
//     if (a.title > b.title) {
//       return -1;
//     }
//     return 0
// })


//Hago el ordenado alfabético------------------------

return (
        <div>
            <div className = "Cards">
                <div className = "Botonera">
                    <button onClick={lastPage}>
                        Atras
                    </button>
                    <button onClick={nextPage}>
                        Adelante
                    </button>
                </div>
                <div>
                    <select name="A-Z/Z-A">
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                    </select>
                    <select name="Score">
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
              {
                  recipesToShow.map(p => {
                      return (
                          <Link to = {`/home/${p.id}`} className = "link">
                            <Card
                                img = {p.image}
                                name = {p.title}
                                diets = {p.diets}
                            />
                            </Link>
                      )
                  })
              }
          </div>
        </div>
        );
    }
else return (
    <div className = "Cargando">
        <h2>Cargando...</h2>
    </div>
)
};