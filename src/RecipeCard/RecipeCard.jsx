import React, { Component } from 'react';
import './RecipeCard.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from '../Modal/Modal.js'



export default class RecipeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes,
            modalToggle: false
        };
    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    }

    render() {
        return (
            <div className="center">
    
                {/* <Modal show={this.state.modalToggle} modalClosed={this.modalHandler}>
                    <RecipeDetails id={this.state.id} />
                </Modal> */}

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <img src={this.state.image} alt="recipe"></img>
                        <Card.Text>

                        </Card.Text>
                        {/* <Button variant="primary" onClick={() => this.setState({
                            modalToggle: true
                        })
                        }>
                            Get Recipe
                    </Button> */}
                    <Button variant="primary" onClick={() => this.setState({
                            modalToggle: true
                        })
                        }>
                            Get Recipe
                    </Button>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}



