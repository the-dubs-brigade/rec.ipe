import React, { Component } from 'react';
import IngredientsList from '../IngredientsList/IngredientsList.jsx'
import './SearchFilters.css';

export default class searchFilters extends Component {
    render() {
        return (<div><h1>This is the search filters component!</h1>
        <IngredientsList></IngredientsList>
        </div>);
    }
}

