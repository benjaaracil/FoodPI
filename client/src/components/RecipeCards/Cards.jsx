import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes } from '../../actions';
import "./Cards.css"
import Card from '../RecipeCard/Card';


export default function Cards () {
const allCards = useSelector((state) => state.allCards);
const dispatch = useDispatch();

React.useEffect(()=> {
    dispatch(getRecipes())
}, [dispatch]);

if (allCards.length){
    return (
          <div>
              {
                  allCards.map(p => {
                      return (
                          <Card

                          
                          
                          />
                      )
                  })
              }
          </div>
        );
    }
else return <h2>Receta no encontrada</h2>
};