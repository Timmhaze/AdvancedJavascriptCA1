import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class RacesComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            races: {
               languages: [],
               subraces: []
            }
        }
    }

    getRaces(v){
        fetch("http://dnd5eapi.co/api/races/" + v)
        .then(res => res.json())
        .then((data) => {
            this.setState({races: data}, console.log(this.state.races));
        })
    }

    componentDidMount(){
        this.getRaces(1);
    }

    render(){
        return(
            <div className = "row">
                <div className = "col-md-12">
                    <div className = "card">
                        <div className = "card-header">
                            <p><strong>Race Information</strong></p>
                        </div>
                        <div className = "card-body">
                            <p><strong>Races</strong></p>
                            <select className = "form-control form-control-md" onChange = { (e) => this.getRaces(e.target.value) }>
                                <option value = "1">Dwarf</option>
                                <option value = "2">Elf</option>
                                <option value = "3">Halfling</option>
                                <option value = "4">Human</option>
                                <option value = "5">Dragonborn</option>
                                <option value = "6">Gnome</option>
                                <option value = "7">Half-Elf</option>
                                <option value = "8">Half-Orc</option>
                                <option value = "9">Tiefling</option>
                            </select>
                            <hr />
                            <p><strong>Race Name:</strong> { this.state.races.name }</p>
                            <p><strong>Speed:</strong> { this.state.races.speed }</p>
                            <p><strong>Alignment:</strong></p>
                            <p> { this.state.races.alignment } </p>
                            <p><strong>Alignment:</strong></p>
                            <p> { this.state.races.age } </p>
                            <p><strong>Size:</strong></p>
                            <p> { this.state.races.size } </p>
                            <p><strong>Description of Size:</strong></p>
                            <p> { this.state.races.size_description } </p>
                            <p><strong>Languages:</strong></p>
                            <ul>
                                {this.state.races.languages.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                            <p><strong>Language Description</strong></p>
                            <p> { this.state.races.language_desc } </p>


                            <p><strong>Subraces:</strong></p>
                            <ul>
                                {this.state.races.subraces.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RacesComponent;
