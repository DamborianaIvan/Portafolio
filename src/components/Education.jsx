import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

const Education = (props) => {
    
        return(
            <div className="container">
                <Cell col={4}>
                    <p>{props.startYear} - {props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '8px'}}> {props.schoolName}</h4>
                    <p>{props.schoolDescription}</p>
                </Cell>
            </div>
        )
    
}

export default Education;