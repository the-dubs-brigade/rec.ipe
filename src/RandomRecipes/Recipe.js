import React from 'react'

const Recipe = (props) => <div classname='recipe'>
    <div>{props.title}</div>
    <div>{props.readyInMinutes}</div>
    <div>{props.servings}</div>
    <div>{props.img}</div>
</div>