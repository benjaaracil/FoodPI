import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/DetailRecipe/Detail';

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
      path = '/home/:id' component = {Detail}
      />
    </div>
  );
}

export default App;
