import React, { Component } from 'react';
import './RecipeDetails.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class RecipeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes,
            credit: props.credit,
            ingredients: props.ingredients,
            instructions: props.instructions, 
            readyInMinutes: props.readyInMinutes,
            sourceUrl: props.sourceUrl,
        };
        this.getRecipeDetails(props.id)
    }

    getRecipeDetails = (id) => {
        let url = 'https://quickneasy-backend.herokuapp.com//recipedetails/?id='
            + id
    
        console.log(url)
        fetch(url).then(response => response.json()).then(json => {
            console.log(json)
            this.setState({     
                id: json.id,
                title: json.title,
                image: json.image,
                likes: json.likes,
                credit: json.creditsText,
                ingredients: json.extendedIngredients,
                instructions: json.instructions, 
                readyInMinutes: json.readyInMinutes,
                sourceUrl: json.sourceUrl,
            })
        })
    }

    render() {
        return (
            <Modal show={true}>
            <Modal.Header>{this.state.title}</Modal.Header>
            <Modal.Body>
            <p>Likes: {this.state.likes}</p>
            <img src={this.state.image} alt="recipe"></img>
            <p>Ingredients: \n
            
                <ul>
                {
                    this.state.ingredients.forEach(ingredient => <li>{ingredient.original}</li>)
                }
                </ul>

            </p>
            </Modal.Body>
            <Modal.Footer>Source: <a href={this.state.sourceUrl}>{this.state.credit}</a> </Modal.Footer>
            </Modal>

        )
    }
}



