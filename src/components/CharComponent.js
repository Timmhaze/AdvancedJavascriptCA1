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
                <div className = "col-md-6">
                    <div className = "card text-center">
                        <div className = "card-header">
                            <p><strong>Character Information Index</strong></p>
                        </div>
                        <div className = "card-body">
                            <p><strong>Attributes</strong></p>
                            <select className = "form-control form-control-md" onChange = { (e) => this.getAttributes(e.target.value) }>
                                <option value = "1">Strength</option>
                                <option value = "2">Dexterity</option>
                                <option value = "3">Constitution</option>
                                <option value = "4">Intelligence</option>
                                <option value = "5">Wisdom</option>
                                <option value = "6">Charisma</option>
                            </select>
                            <hr/>
                            <p><strong>Skills</strong></p>
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
                            <hr/>
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
                        </div>
                    </div>
                </div>
                <div className = "col-md-6">
                    <div className = "card">
                        <div className = "card-header">
                            <p><strong>Details</strong></p>
                        </div>
                        <div class = "card-body">
                            <p><strong>Name:</strong> { this.state.attributes.full_name }</p>
                            <p><strong>Description: </strong></p>
                            <p>{ this.state.attributes.desc[0] }</p>
                            <p><strong>Mechanics: </strong></p>
                            <p>{ this.state.attributes.desc[1] }</p>
                            <p><strong>Skills: </strong></p>
                            <ul>
                                {this.state.attributes.skills.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "col-md-12">
                <div className = "card">
                        <div className = "card-header">
                            <p><strong>Skill Name:</strong> { this.state.skills.name }</p>
                        </div>
                        <div class = "card-body">
                            <p><strong>Description: </strong></p>
                            <p>{ this.state.skills.desc[0] }</p>
                            <p><strong>Governed By:</strong> { this.state.skills.ability_score.name } </p>
                        </div>
                    </div>
                </div>
                <div className = "col-md-12">
                <div className = "card">
                        <div className = "card-header">
                        <p><strong>Class Name:</strong> { this.state.classes.name }</p>
                        </div>
                        <div class = "card-body">
                            <p><strong>Hit Die (Health):</strong> { this.state.classes.hit_die }</p>
                            <p><strong>Profociencies</strong></p>
                            <ul>
                                {this.state.classes.proficiencies.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                            <p><strong>Saving Throws</strong></p>
                            <ul>
                                {this.state.classes.saving_throws.map((e, i) => <li key = { i }>{ e.name }</li> )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharComponent;
