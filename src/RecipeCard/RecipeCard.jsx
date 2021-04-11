import React, { Component } from 'react';
import './RecipeCard.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class RecipeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes, 
            showRecipeDetails: false
        };
    }

    render() {
        return (
            <div>
            <RecipeDetails id={this.state.id} isOpen={this.state.showRecipeDetails}/>
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <img src={this.state.image} alt="recipe"></img>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="primary" onClick={() => this.setState({
                            showRecipeDetails: true})
                    }>
                    Get Recipe
                    </Button>
                   
    
                </Card.Body>
            </Card>
            </div>
        )
    }
}



