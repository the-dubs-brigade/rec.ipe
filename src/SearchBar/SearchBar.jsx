import React, { Component } from 'react';
import './SearchBar.css';

/*

*/

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    render() {
        return (<div><h1>This is the search bar!</h1>

        </div>);
    }
}