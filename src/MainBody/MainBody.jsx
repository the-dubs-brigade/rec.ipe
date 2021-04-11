import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import HeaderBox from '../HeaderBox/HeaderBox.jsx';
import Bar from "material-ui-search-bar";
import RandomRecipes from '../RandomRecipes/RandomRecipes.jsx';
import SearchPage from '../SearchPage/SearchPage.jsx';
import FooterBox from '../FooterBox/FooterBox.jsx';
import './MainBody.css';

export default class MainBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            search: '',
            ingredients: [],
            width: 0,
            height: 0,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.state.search.length != 0) {
                this.searchToggle();
            }
        
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
                <RandomRecipes></RandomRecipes>
            </div>;
        }
        return <div className="searchPage">
            <SearchPage></SearchPage>
        </div>
    }

    handleRequestSearch(event) {

        //create the array of ingredients
        this.setState({ingredients: this.state.search.split(', ')});

        //testing the ingredients array
        //setTimeout(()=> {console.log(this.state.ingredients);}, 1);
    }

    render() {
        let pageBody = this.isSearching(this.state.searching);
        return (
            <div>
                <HeaderBox></HeaderBox>
                <Container maxWidth = "lg">
                    <Bar
                value={this.state.search}
                onChange={(newValue) => this.setState({search: newValue})}
                onRequestSearch={this.handleRequestSearch.bind(this)}
            />
                    {pageBody}
                    </Container>
                <FooterBox></FooterBox>
            </div>
        );
    }
}

