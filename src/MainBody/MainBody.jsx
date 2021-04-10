import React, { Component } from 'react';
import HeaderBox from '../HeaderBox/HeaderBox.jsx';
import RandomRecipes from '../RandomRecipes/RandomRecipes.jsx';
import SearchPage from '../SearchPage/SearchPage.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './MainBody.css';

export default class MainBody extends Component {
    render() {
        return (<div><h1>This is the main body component!</h1>
        <HeaderBox></HeaderBox>
        <SearchBar></SearchBar>
        <h1>Everything aside from the Search bar is supposed to conditionally appear.</h1>
        <RandomRecipes></RandomRecipes>
        <SearchPage></SearchPage></div>);
    }
}

