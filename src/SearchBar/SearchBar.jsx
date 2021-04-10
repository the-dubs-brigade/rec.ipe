import React, { Component } from 'react';
import './SearchBar.css';

/*

*/

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: 'Type Here',
            inputVal: '',
        };
    }
    updateSearch(event) {
        console.log(event.target.value);
        this.setState({search: event.target.value});
    }
    render() {
        return(
            <div>
                <h1>This is the search bar!</h1>
                <input type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
            </div>
        );
    }
}