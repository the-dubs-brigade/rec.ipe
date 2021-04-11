import React, { Component } from 'react';
import './HeaderBox.css'

export default class HeaderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
        <div className="HeaderBox">
            <h1>
                <a href="" 
                onClick = {this.props.sendHome}
                style = {{
                    color: "white",

                }}
                >REC.IPE</a>
                <div className="HeaderBox-Subtitle">
                    Find Recipes Based Upon Ingredients You Have!
                </div>
            </h1>
        </div>
        );
    }
}
