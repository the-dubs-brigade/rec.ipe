import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import GridList from '@material-ui/core/GridList';

import IngredientsList from '../IngredientsList/IngredientsList.jsx';
import './SearchPage.css';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        console.log('aaa');
        console.log(props.results);
        
        this.state = {
            ingredients: props.ingredients,
            results: props.results
        };
    }

    render() {
        return (<div className="searchPage"><br></br>
        <IngredientsList
        ings = {this.state.ingredients}
        /><br></br>
        <GridList 
        className = 'chipsList'
        cellHeight = {400}
        >
        {this.state.results.map((res) => 
        <li key = {res.id}>
        <RecipeCard
        id = {res.id}
        title = {res.title}
        image = {res.image}
        likes = {res.likes}
        ></RecipeCard>
        </li>)}
        </GridList>

        </div>);
    }
}

