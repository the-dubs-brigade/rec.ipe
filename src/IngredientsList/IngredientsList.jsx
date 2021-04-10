import React, { Component } from 'react';
import IngredientBox from '../IngredientBox/IngredientBox.jsx'
import './IngredientsList.css';

export default class IngredientsList extends Component {
    render() {
        return (<div><h1>This is the Ingredients list component!</h1>
        <IngredientBox></IngredientBox>
        </div>);
    }
}

