import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class CharComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            attributes: {
                desc: [],
                skills: [0]
            },
            skills: {
                desc: [],
                ability_score: {}
            },
            classes: {
                proficiencies: [],
                saving_throws: []
            }
        }
    }

    getAttributes(v){
        fetch("http://dnd5eapi.co/api/ability-scores/" + v)
        .then(res => res.json())
        .then((data) => {
            this.setState({attributes: data}, () => console.log(this.state.attributes));
        })
    }

    getSkills(v){
        fetch("http://dnd5eapi.co/api/skills/" + v)
        .then(res => res.json())
        .then((data) => {
            this.setState({skills: data}, console.log(this.state.skills));
        })
    }

    getClasses(v){
        fetch("http://dnd5eapi.co/api/classes/" + v)
        .then(res => res.json())
        .then((data) => {
            this.setState({classes: data}, console.log(this.state.classes.proficiency_choices));
        })
    }

    componentDidMount(){
        this.getAttributes(1);
        this.getSkills(1);
        this.getClasses(1);
    }

    render(){
        return(
            <div className = "row">
                <div className = "card">
                    <div className = "card-body">
                        <div className = "col-md-12">
                            <div className = "card">
                                <div className = "card-header text-center">
                                    <h3><strong>Attributes</strong></h3>
                                    <select className = "form-control form-control-md" onChange = { (e) => this.getAttributes(e.target.value) }>
                                        <option value = "1">Strength</option>
                                        <option value = "2">Dexterity</option>
                                        <option value = "3">Constitution</option>
                                        <option value = "4">Intelligence</option>
                                        <option value = "5">Wisdom</option>
                                        <option value = "6">Charisma</option>
                                    </select>
                                </div>
                                <div class = "card-body">
                                    <p><strong>Name:</strong> { this.state.attributes.full_name }</p>
                                    <p><strong>Description: </strong></p>
                                    <p>{ this.state.attributes.desc[0] }</p>
                                    <p><strong>Mechanics: </strong></p>
                                    <p>{ this.state.attributes.desc[1] }</p>
                                    <p><strong>Governs: </strong></p>
                                    <ul>
                                        {this.state.attributes.skills.map((e, i) => <li key = { i }>{ e.name }</li> )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-12">
                            <div className = "card">
                                <div className = "card-header text-center">
                                <h3><strong>Skills</strong></h3>
                                <select className = "form-control form-control-md" onChange = { (e) => this.getSkills(e.target.value) }>
                                        <option value = "1">Acrobatics</option>
                                        <option value = "2">Animal Handling</option>
                                        <option value = "3">Arcana</option>
                                        <option value = "4">Athletics</option>
                                        <option value = "5">Deception</option>
                                        <option value = "6">History</option>
                                        <option value = "7">Insight</option>
                                        <option value = "8">Intimidation</option>
                                        <option value = "9">Investigation</option>
                                        <option value = "10">Medicine</option>
                                        <option value = "11">Nature</option>
                                        <option value = "12">Perception</option>
                                        <option value = "13">Performance</option>
                                        <option value = "14">Persuasion</option>
                                        <option value = "15">Religion</option>
                                        <option value = "16">Sleight of Hand</option>
                                        <option value = "17">Stealth</option>
                                        <option value = "18">Survival</option>
                                    </select>
                                </div>
                                <div class = "card-body">
                                    <p><strong>Description: </strong></p>
                                    <p>{ this.state.skills.desc[0] }</p>
                                    <p><strong>Governed By:</strong> { this.state.skills.ability_score.name } </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharComponent;
