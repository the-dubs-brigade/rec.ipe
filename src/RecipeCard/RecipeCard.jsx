import React, { Component } from 'react';
import './RecipeCard.css';
// import RecipeDetails from '../RecipeDetails/RecipeDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Modal from '../Modal/Modal.js'


export default class RecipeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes,
            modalToggle: false,
            url: props.url,
            redirect: false
        };

    }

    modalHandler = (e) => {
        e.preventDefault();
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    }

    handleGetRecipe = (id) => {

        let url = 'https://quickneasy-backend.herokuapp.com/recipedetails/?id='
            + id

        console.log(url)
        fetch(url).then(response => response.json()).then(json => {
            console.log(json)
            console.log(json.sourceUrl)
            window.location = json.sourceUrl
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
                        <Button variant="primary" onClick={() => {
                            this.handleGetRecipe(this.state.id)
                            this.setState({ modalToggle: true })
                        }
                        }>
                            <a href={this.state.url}
                                style={{
                                    color: "white",

                                }}>

                                Get Recipe
                    </a>

                        </Button>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}



