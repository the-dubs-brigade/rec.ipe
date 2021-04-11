import React, { Component } from 'react';
import './RecipeDetails.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class RecipeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
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
        this.getRecipeDetails(this.state.id)
    }


    componentDidUpdate(prevProps){
        if (this.props.isOpen !== prevProps.isOpen){
            if (this.props.isOpen) {
                this.getRecipeDetails(this.state.id)
            }
        }
    }

    closeModal = () => this.setState({ isOpen: false });

    getRecipeDetails = (id) => {
        let url = 'https://quickneasy-backend.herokuapp.com/recipedetails/?id='
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
            <div>
                <h2>{this.state.title}</h2>
                <img src={this.state.image} alt="recipe"></img>
                <p>Ingredients: \n
                    {this.state.ingredients}
                </p>
                <a href={this.state.sourceUrl}>{this.state.credit}</a>
                {/* <Modal show={this.state.isOpen}>
                <Modal.Header>{this.state.title}</Modal.Header>
                <Modal.Body>
                
                <img src={this.state.image} alt="recipe"></img>
                <p>Ingredients: \n
                    {this.state.ingredients}
                </p>
                </Modal.Body>
                <Modal.Footer>Source:  </Modal.Footer>
                </Modal> */}
            </div>


        )
    }
}



