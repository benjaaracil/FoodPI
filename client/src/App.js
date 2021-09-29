import './App.css';
import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Home from "./components/Home";

function App() {  
  return (
    <Route
    path='/'
    render={() => <Home />}
  />
  );
}

export default App;
