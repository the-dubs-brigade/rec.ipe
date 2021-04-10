import React, { Component } from 'react';
import RecipeResult from '../RecipeResult/RecipeResult.jsx';
import './RandomRecipes.css';

export default class RandomRecipes extends Component {
    render() {
        return (<div><h1>This is the random recipes component!</h1>
        <RecipeResult></RecipeResult></div>);
    }
}

