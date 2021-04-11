import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import RecipeResult from '../RecipeResult/RecipeResult.jsx';
import IngredientsList from '../IngredientsList/IngredientsList.jsx';
import './SearchPage.css';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: ["apples", "oranges", "pineapples", "platypus"],
            results: [
                {
                    id: 659581,
                    title: "Scotch Eggs",
                    image: "https://spoonacular.com/recipeImages/659581-312x231.jpg",
                    likes: 2
                },
                {
                    id: 644965,
                    title: "Goat Cheese, Fig And Proscuitto Crostini",
                    image: "https://spoonacular.com/recipeImages/644965-312x231.jpg",
                    likes: 2
                },
                {
                    id: 715494,
                    title: "Guinness and Brats",
                    image: "https://spoonacular.com/recipeImages/715494-312x231.jpg",
                    likes: 2
                }
            ],
            submit: 0
        };
    }

    render() {
        return (<div className="searchPage"><h1>This is the Search page component!</h1>
        <IngredientsList
        ings = {this.state.ingredients}
        />
        <GridList 
        className = 'chipsList'
        cellHeight = {400}
        >
        {this.state.results.map((res) => 
        <li key = {res}>
        <RecipeResult
        id = {res.id}
        title = {res.title}
        image = {res.image}
        likes = {res.likes}
        ></RecipeResult>
        </li>)}
        </GridList>
        </div>);
    }
}

