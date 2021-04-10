import React, { Component } from 'react';
import './RecipeResult.css';

export default class RecipeResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            
        };
    }

    render() {
        return <h1>This is the recipe result component!</h1>
    }
}

