import React, { Component } from 'react';
import Bar from "material-ui-search-bar";
//import SearchIcon from "@material-ui/icons/styles";
import './SearchBar.css';

/*

*/

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: '',         //text in the search bar
            ingredients: '',    //will hold the array of ingredients
        };
    }
    //detecting enter inputs
    handleRequestSearch(event) {
        //create the array of ingredients
        this.setState({ingredients: this.state.search.split(', ')});

        //testing the ingredients array
        setTimeout(()=> {console.log(this.state.ingredients);}, 1);
        this.setState({search: ''});
    }
    render() {
        return(
            <Bar
                value={this.state.search}
                onChange={(newValue) => this.setState({search: newValue})}
                onRequestSearch={this.handleRequestSearch.bind(this)}
            />
        );
    }
}