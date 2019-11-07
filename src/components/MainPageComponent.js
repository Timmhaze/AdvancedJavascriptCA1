import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainPage extends Component{

    render(){
        return(
            <div className = "row">
                <div className = "col-4">
                    <div className="card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/class.png')} alt = "Card image cap" />
                        <hr />
                        <div className = "card-body">
                            <p className = "card-text">Character Information</p>
                        </div>
                    </div>
                </div>
                <div className = "col-4">
                    <div className = "card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/character.png')} alt="Card image cap" />
                        <hr />
                        <div className = "card-body">
                            <p className = "card-text">Class Information</p>
                        </div>
                    </div>
                </div>
                <div className = "col-4">  
                    <div className = "card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/race.png')} alt="Card image cap" />
                        <hr />
                        <div className = "card-body">
                            <p className = "card-text">Race Information</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
