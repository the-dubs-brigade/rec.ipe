import React, { Component } from 'react';
import RecipeResult from '../RecipeResult/RecipeResult.jsx';
import Carousel from 'nuka-carousel';
import './RandomRecipes.css';

export default class RandomRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
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
        }
        )


    }

    render() {

        return (
            <div>
                <h2>Random Recipes:</h2>
                <Carousel>
                    {
                        this.state.recipes.map(recipe =>
                            <RecipeResult id={recipe.id} title={recipe.title} image={recipe.image} likes={recipe.likes} />
                        )
                    }
                </Carousel>
            </div>
        );

    }
}



