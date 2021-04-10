import React, { Component } from 'react';
import RecipeResult from '../RecipeResult/RecipeResult.jsx';
import './RandomRecipes.css';

export default class RandomRecipes extends Component {

constructor(props) {
    super(props);
    this.state = {
        ingredients: ["chicken", "salmon", "asparagus", "lemon pepper",
        "broccoli", "spaghetti", "black pepper", "sea salt", "paprika",
        "apples", "oranges", "milk", "eggs", "white bread", "flour",
        "baking soda", "rice", "white cooking wine", "ragu", "peanut sauce",
        "bell pepper", "tomato", "basil", "habanero"],
    };
}

    render() {
        return (<div><h1>This is the random recipes component!</h1>
        <RecipeResult></RecipeResult></div>);
    }
}

