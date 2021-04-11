import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
//import Carousel from 'nuka-carousel';
import './RandomRecipes.css';
//import CardDeck from 'react-bootstrap/Card'

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
        let url = 'https://quickneasy-backend.herokuapp.com/random?number='
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
                <hr/>
                <h2>Random Recipe:</h2>
                <div className="center">
                    {

                        this.state.recipes.map(recipe =>
                            <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} likes={recipe.likes} url={recipe.sourceUrl} />
                        )

                    }
                </div>
            </div>
        );

    }
}



