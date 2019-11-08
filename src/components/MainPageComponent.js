import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class MainPage extends Component{

    render(){
        return(
            <div className = "row">
                <div className = "col-md-4">
                    <div className="card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/class.png')} alt = "Card image cap" />
                        <hr />
                        <div className = "card-body special-card">
                            <h4 className = "card-text">Character Information</h4>
                            <hr />
                            <Link to="CharComponent">
                             <button className = "btn btn-success">View</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "col-md-4">
                    <div className = "card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/character.png')} alt="Card image cap" />
                        <hr />
                        <div className = "card-body">
                            <h4 className = "card-text">Class Information</h4>
                            <hr />
                            <Link to="ClassComponent">
                                <button className = "btn btn-primary">View</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "col-md-4">  
                    <div className = "card text-center" style = {{ width: 18 + 'rem' }}>
                        <img className = "card-img-top" src = {require('../images/race.png')} alt="Card image cap" />
                        <hr />
                        <div className = "card-body">
                            <h4 className = "card-text">Race Information</h4>
                            <hr />
                            <Link to="RacesComponent">
                                <button className = "btn btn-danger">View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
