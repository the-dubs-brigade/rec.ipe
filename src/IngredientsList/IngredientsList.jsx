import React, { Component } from 'react';
import IngredientBox from '../IngredientBox/IngredientBox.jsx'
import GridList from '@material-ui/core/GridList';
import './IngredientsList.css';

export default class IngredientsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: props.ings
        };
    }

    //Need to handle deletions within the ingredient boxes

    
    deleteEvent(event, ing) {
        //Get the index of the item to delete, prune it from ingredients,
        //set the new state which will generate the new list
        let ind = this.state.ingredients.indexOf(ing);
        event.preventDefault();
        console.log(ind);
        let ings = this.state.ingredients;
        ings.splice(ind, 1);
        console.log(ings);
        this.setState({ingredients: ings});
        
    }

    //BUILD MAP
    buildList() {
        let ings = this.state.ingredients;
        let ingList = [];
        for(let i = 0; i < ings.length; i++) {
            ingList.push(
                <IngredientBox 
                key = {i} 
                name = {ings[i]} 
                handleDelete = {(e) => this.deleteEvent(e, {i})}></IngredientBox>
            );
        }
        console.log(ingList);
        this.setState({ingChipList: ingList})
    }

    render() {
        let ings = this.state.ingredients;
        return (<div className = "iList">
        <GridList 
        className = 'chipsList'
        cellHeight = {30}
        cols = {9}
        >
            {ings.map((ing) => <li key = {ing}><IngredientBox 
                key = {ing} 
                name = {ing} 
                handleDelete = {(e) => this.deleteEvent(e, ing)}/></li>)}
        </GridList>
        </div>);
    }
}

