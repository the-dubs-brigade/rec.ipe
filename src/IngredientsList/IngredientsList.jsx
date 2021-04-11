import React, { Component } from 'react';
import IngredientBox from '../IngredientBox/IngredientBox.jsx'
import GridList from '@material-ui/core/GridList';
import './IngredientsList.css';

export default class IngredientsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: ["pineapple", "apples", "oranges"],
            ingChipList: []
        };
    }

    //Need to handle deletions within the ingredient boxes

    componentDidMount() {
        //this.buildList();
        console.log('aaa');
    }
    
    deleteEvent(event, ing) {
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
        return (<div className = "iList"><h1>This is the Ingredients list component!</h1>
        <GridList 
        className = 'chipsList'
        cellHeight = {30}
        cols = {10}
        >
            {ings.map((ing) => <li key = {ing}><IngredientBox 
                key = {ing} 
                name = {ing} 
                handleDelete = {(e) => this.deleteEvent(e, ing)}/></li>)}
        </GridList>
        </div>);
    }
}

