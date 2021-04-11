import React, { Component } from 'react';
import Bar from "material-ui-search-bar";
//import SearchIcon from "@material-ui/icons/styles";
import './SearchBar.css';

/*

*/

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            search: '',         //text in the search bar
            ingredients: [],    //will hold the array of ingredients
            width: props.width,
            height: props.height,
        };
    }
<<<<<<< HEAD

    handleChange(newValue, nowSearching) {
        console.log(this.props);
        nowSearching();
        this.setState({search: newValue});

    }

=======
>>>>>>> bd17c89ace778918877b3b8999f3fcb3e9921c6b
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
                onChange={(newValue) => this.handleChange(newValue, event)}
                onRequestSearch={this.handleRequestSearch.bind(this)}
            />
        );
    }
}