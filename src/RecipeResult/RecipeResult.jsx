import React, { Component } from 'react';
import './RecipeResult.css';

export default class RecipeResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes
        };
    }

    render() {
        return (
            <div className="RecipeResult">
                <h1>{this.state.title}</h1>
                <p>Likes: {this.state.likes}</p>
                <img src={this.state.image} alt="recipe"></img>
            </div>
        )
    }
}

