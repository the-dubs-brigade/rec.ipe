import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import Carousel from 'nuka-carousel';
import './RandomRecipes.css';
import CardDeck from 'react-bootstrap/Card'

export default class RandomRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
        console.log("creating random recipes")
    }

    componentDidMount() {
        this.loadRecipes(5, null)
    }

    loadRecipes = (count, tags) => {
        let url = 'https://quickneasy-backend.herokuapp.com/random?count='
            + count
        if (tags) {
            tags = tags.replace(" ", "+")
            url += '&tags=' + tags
        }
        console.log(url)
        fetch(url).then(response => response.json()).then(json => {
            console.log(json)
            this.setState({ recipes: json.recipes })
        })
    }

    render() {
        return (
            <div>
                <h2>Random Recipes:</h2>
                <CardDeck>
                    {
                        this.state.recipes.map(recipe =>
                            <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} likes={recipe.likes} />
                        )
                    }
                </CardDeck>
            </div>
        );

    }
}



