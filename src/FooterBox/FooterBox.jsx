import React, { Component } from 'react';
import './FooterBox.css';

export default class FooterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='FooterBox'>
                <h1>Built by <a href="https://github.com/the-dubs-brigade" 
                style = {{
                    color: "white",
                    
                }}>
                    [ The Dubs Brigade ]</a>
                    <div className='FooterBox-Subtitle'>
                        UWB Hacks from Home 2021
                    </div>
                </h1>
            </div>
        );
    }
}