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



