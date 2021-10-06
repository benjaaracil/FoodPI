import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/DetailRecipe/Detail';
import Create from './components/CreateRecipe/Create';

function App() {
  return (
    <div>
      <Route
      exact path='/' component={Landing}
      />
      <Route 
      exact path='/home' component = {Home}
      />
      <Route
      exact path = '/home/:id' component = {Detail}
      />
      <Route
      exact path = '/create' component = {Create}
      />
    </div>
  );
}

export default App;
