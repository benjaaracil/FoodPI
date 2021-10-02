import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes } from '../../actions';
import "./Cards.css"
import Card from '../RecipeCard/Card';


export default function Cards () {
const allCards = useSelector((state) => state);
const dispatch = useDispatch();

console.log(allCards);

React.useEffect(()=> {
    dispatch(getRecipes())
}, [dispatch]);

if (allCards && allCards.recipes.length){
return (
          <div>
              {
                  allCards.recipes.map(p => {
                      return (
                          <Card
                            img = {p.image}
                            name = {p.title}
                            diets = {p.diets}
                          />
                      )
                  })
              }
          </div>
        );
    }
else return <h2>Receta no encontrada</h2>
};