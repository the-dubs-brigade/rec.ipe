import React, { Component } from 'react';
import './IngredientBox.css';

export default class IngredientBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    render() {
        return (<div><h1>This is the Ingredient Box component!</h1></div>);
    }
}

