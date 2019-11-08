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
    <Router>  
    <div className = "container">
      <div className = "row">
        &nbsp;
      </div>
      <div className = "row">
        <div className = "col">
          <Route path = "/" exact component = {MainPageComponent}/>
          <Route path = "/CharComponent" component = {CharComponent}/>
          <Route path = "/ClassComponent" component = {ClassComponent}/>
          <Route path = "/RacesComponent" component = {RacesComponent}/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
