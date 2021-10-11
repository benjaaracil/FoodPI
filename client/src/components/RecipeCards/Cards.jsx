import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
import { getRecipes } from '../../actions';
import "./Cards.css"
import ImagenFondo from "../../img/CocinerosBackground1.png"
import Card from '../RecipeCard/Card';
import { Link } from 'react-router-dom';

export default function Cards () {
const allCards = useSelector((state) => state);
const dispatch = useDispatch();

//Ya hago un get de todas mis recetas acá-------------------
        React.useEffect(() => {
            (async () => {
                dispatch(await getRecipes())
                //Si hago una nueva busqueda se posiciona de nuevo en la primer pag:
                // setCurrent(0)
                //
            })()
          },[])
//-----------------------------------------------------------

//PAGINADO------------------------------------------------------------------------------
//Estado para el paginado
const [current, setCurrent] = useState(0)

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

return (
        <div>
            <div className="contenedor">
              <img src = {ImagenFondo} className = "Fondito"/>
            </div>
            <div className = "Botonera">
                    <button className = "Back"onClick={lastPage}>
                        Back
                    </button>
                    <button className = "Next" onClick={nextPage}>
                        Next
                    </button>
              </div>
            <div className = "Cards">
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
                <h2>Cargando</h2>
            </div>
        )
};