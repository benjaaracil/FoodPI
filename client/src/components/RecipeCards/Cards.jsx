import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes } from '../../actions';
import "./Cards.css"
import Card from '../RecipeCard/Card';
import { Link } from 'react-router-dom';


export default function Cards () {
const allCards = useSelector((state) => state);
const dispatch = useDispatch();

// console.log(allCards);

React.useEffect(() => {
    (async () => {
        dispatch(await getRecipes())
    })()
  },[])

if (allCards && allCards.recipes.length){
return (
          <div className = "Cards">
              {
                  allCards.recipes.map(p => {
                      return (
                          <Link to = {`/home/${p.id}`}>
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
        );
    }
else return (
    <div className="Cards">
        <h2>Cargando...</h2>
    </div>
)
};