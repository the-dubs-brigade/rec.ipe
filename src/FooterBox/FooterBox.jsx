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
                <h1>
                    The Dubs Brigade
                    <div className='FooterBox-Subtitle'>
                        UWB Hacks from Home 2021
                    </div>
                </h1>
            </div>
        );
    }
}