import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import IngredientsList from '../IngredientsList/IngredientsList.jsx';
import './SearchPage.css';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            results: []
        };
    }

    render() {
        return (<div><h1>This is the Search page component!</h1>
        <IngredientsList></IngredientsList>
        <RecipeCard></RecipeCard>
        </div>);
    }
}

