import React, { Component } from 'react';
import './SearchBar.css';

/*

*/

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: 'Search for ingredients',   //text in the search bar
            ingredients: '',                    //will hold the array of ingredients
        };
    }
    //detecting enter inputs
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            
            //create the array of ingredients
            this.setState({ingredients: this.state.search.split(',')});

            //testing the ingredients array
            //setTimeout(()=> {console.log(this.state.ingredients);}, 1);
        }
    }
    //handles typing into the search bar
    updateSearch(event) {

        var str = event.target.value;
        var oldText = str.substring(0, str.length - 1);

        //if the default text is there, remove it
        //otherwise, just add the new character to the end
        if (oldText === 'Search for ingredients') {
            this.setState(
                {search: str.substring(str.length - 1, str.length)}
            );
        } else {
            this.setState({search: str});
        }
    }
    render() {
        return(
            <div>
                <h1>This is the search bar!</h1>
                <input type="text" 
                    value={this.state.search}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onChange={this.updateSearch.bind(this)}
                />
            </div>
        );
    }
}