import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import HeaderBox from '../HeaderBox/HeaderBox.jsx';
import Bar from "material-ui-search-bar";
import RandomRecipes from '../RandomRecipes/RandomRecipes.jsx';
import SearchPage from '../SearchPage/SearchPage.jsx';
import FooterBox from '../FooterBox/FooterBox.jsx';
import './MainBody.css';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import GridList from '@material-ui/core/GridList';
import IngredientsList from '../IngredientsList/IngredientsList.jsx';
//import './SearchPage.css';

export default class MainBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            search: '',
            ingredients: [],
            width: 0,
            height: 0,
            results: []
        };
    }

    /*
    async function GetRecipesByIngredients(ingredients) {
    ingredients = ingredients.replace(" ", "+")
    let url = 'https://quickneasy-backend.herokuapp.com/getrecipesbyingredients?ingredients=' + ingredients

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data

    */

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.search.length);
            if(this.state.search.length > 1) {
                if(!this.state.searching) {
                    this.setState({searching: !this.state.searching});
                } else {
                    if(this.state.search.charAt(this.state.search.length - 1) === ',') {
                        let ingArr = this.state.ingredients;
                        if(!ingArr.includes(this.state.search.substring(0,this.state.search.length - 1))) {
                            ingArr.push(this.state.search.substring(0, this.state.search.length - 1));
                        }
                        this.setState({
                            ingredients: ingArr,
                            search: ''
                        })
                    }
                }
            }
        
    }

    isSearching(props) {
        const searching = this.state.searching;
        if(!searching) {
            return <div className="frontPage">
                <RandomRecipes></RandomRecipes>
            </div>;
        }
        console.log(this.state.results);
        return <div className="searchPage"><br></br>
        <IngredientsList
        ings = {this.state.ingredients}
        /><br></br>
        <GridList 
        className = 'chipsList'
        cellHeight = {400}
        >
        {this.state.results.map((res) => 
        <li key = {res.id}>
        <RecipeCard
        id = {res.id}
        title = {res.title}
        image = {res.image}
        likes = {res.likes}
        ></RecipeCard>
        </li>)}
        </GridList>

        </div>;
    }

    handleRequestSearch(event) {
        let ingString = this.state.ingredients.join('+');
        let url = 'https://quickneasy-backend.herokuapp.com/recipesbyingredients?ingredients=' + ingString
        fetch(url).then(response => response.json()).then(json => {
            console.log(json)
            this.setState({ results: json })
            console.log(this.state.results);
        })
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
                    <RandomRecipes></RandomRecipes>
                    <h1>Everything aside from the Search bar is supposed to conditionally appear.</h1>
                    </Container>
                <FooterBox></FooterBox>
            </div>
        );
    }
}

