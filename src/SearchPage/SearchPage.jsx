import React, { Component } from 'react';
import RecipeResult from '../RecipeResult/RecipeResult.jsx';
import SearchFilters from '../SearchFilters/SearchFilters.jsx';
import './SearchPage.css';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            results: []
        };
    }

    render() {
        return (<div><h1>This is the Search page component!</h1>
        <SearchFilters></SearchFilters>
        <RecipeResult></RecipeResult>
        </div>);
    }
}

