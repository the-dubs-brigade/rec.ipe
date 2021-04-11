import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import './IngredientBox.css';

export default class IngredientBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iName: props.name,
        };
    }

    render() {
        return (<Chip 
            icon = {<RestaurantMenuIcon/>}
            label = {this.state.iName}
            onDelete = {this.props.handleDelete}
            
        />);
    }
}

