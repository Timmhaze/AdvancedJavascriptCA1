import React, { Component } from 'react';
import './App.css';
import CharComponent from './components/CharComponent';
import MainPageComponent from './components/MainPageComponent';
import ClassComponent from './components/ClassComponent';
import RacesComponent from './components/RacesComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (  
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <RacesComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
