import React, { Component } from 'react';
import HeaderBox from '../HeaderBox/HeaderBox.jsx';
import RandomRecipes from '../RandomRecipes/RandomRecipes.jsx';
import SearchPage from '../SearchPage/SearchPage.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './MainBody.css';

export default class MainBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searching: false,
        };
    }

    isSearching(props) {
        const searching = props.searching;
        if(!searching) {
            return <div class="frontPage"><HeaderBox></HeaderBox>
                <SearchBar></SearchBar>
                <RandomRecipes></RandomRecipes>
            </div>;
        }
        return <div class="searchPage">
            <SearchBar></SearchBar>
            <SearchPage></SearchPage>
        </div>
    }

    render() {
        let pageBody = this.isSearching(this.state.searching);
        return (<div><h1>This is the main body component!</h1>
        {pageBody}
        <h1>Everything aside from the Search bar is supposed to conditionally appear.</h1>
        </div>);
    }
}

