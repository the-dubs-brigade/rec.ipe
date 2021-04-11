import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import HeaderBox from '../HeaderBox/HeaderBox.jsx';
import RandomRecipes from '../RandomRecipes/RandomRecipes.jsx';
import SearchPage from '../SearchPage/SearchPage.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import FooterBox from '../FooterBox/FooterBox.jsx';
import './MainBody.css';

export default class MainBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            width: 0,
            height: 0,
        };
    }

    searchToggle() {
        if(!this.state.searching) {
        this.setState({searching: !this.state.searching});
        }
    }

    isSearching(props) {
        const searching = this.state.searching;
        if(!searching) {
            return <div className="frontPage">
                <SearchBar
                onClick = {(e) => this.searchToggle()}
                width = {this.state.width}
                height = {this.state.height}
                ></SearchBar>
                <RandomRecipes></RandomRecipes>
            </div>;
        }
        return <div className="searchPage">
            <SearchBar
            onClick = {(e) => this.searchToggle()}
            width = {this.state.width}
            height = {this.state.height}></SearchBar>
            <SearchPage></SearchPage>
        </div>
    }

    render() {
        let pageBody = this.isSearching(this.state.searching);
        return (
            <div>
                <HeaderBox></HeaderBox>
                <Container maxWidth = "lg"><h1>This is the main body component!
                    </h1>
                    {pageBody}
                    <h1>Everything aside from the Search bar is supposed to conditionally appear.</h1>
                    </Container>
                <FooterBox></FooterBox>
            </div>
        );
    }
}

