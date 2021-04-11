import React, { Component } from 'react';
import './RecipeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export default class RecipeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            likes: props.likes
        };
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Likes: {this.state.likes}</Card.Subtitle>
                    <img src={this.state.image} alt="recipe"></img>
                    <Card.Text>

                    </Card.Text>
                    <Card.Link href="#">Get Recipe</Card.Link>
                    {/* <Card.Link href="#">Add to Favorites</Card.Link> */}
                </Card.Body>
            </Card>
        )
    }
}



