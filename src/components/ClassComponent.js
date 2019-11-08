import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            classes: {
                proficiencies: [],
                saving_throws: [],
                subclasses: []
            }
        }
    }

    getClasses(v){
        fetch("http://dnd5eapi.co/api/classes/" + v)
        .then(res => res.json())
        .then((data) => {
            this.setState({classes: data}, console.log(this.state.classes.proficiency_choices));
        })
    }

    componentDidMount(){
        this.getClasses(1);
    }

    render(){
        return(
            <div className = "row">
                <div className = "col-md-12">
                    <div className = "card">
                        <div className = "card-header text-center">
                            <h3><strong>Class Information</strong></h3>
                        </div>
                        <div className = "card-body">
                            <p><strong>Classes</strong></p>
                            <select className = "form-control form-control-md" onChange = { (e) => this.getClasses(e.target.value) }>
                                <option value = "1">Barbarian</option>
                                <option value = "2">Bard</option>
                                <option value = "3">Cleric</option>
                                <option value = "4">Druid</option>
                                <option value = "5">Fighter</option>
                                <option value = "6">Monk</option>
                                <option value = "7">Paladin</option>
                                <option value = "8">Ranger</option>
                                <option value = "9">Rogue</option>
                                <option value = "10">Sorcerer</option>
                                <option value = "11">Warlock</option>
                                <option value = "12">Wizard</option>
                            </select>
                            <hr />
                            <p><strong>Class Name:</strong> { this.state.classes.name }</p>
                            <p><strong>Hit Die (Health):</strong> { this.state.classes.hit_die }</p>
                            <p><strong>Profociencies</strong></p>
                            <ul>
                                {this.state.classes.proficiencies.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                            <hr />
                            <p><strong>Saving Throws:</strong></p>
                            <ul>
                                {this.state.classes.saving_throws.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                            <hr />
                            <p><strong>Sub-Classes:</strong></p>
                            <ul>
                                {this.state.classes.subclasses.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassComponent;
