import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

const Education = (props) => {
    
        return(
            <div className="container">
                <div className="row">

                    <div className="col-4 ">
                        <p>{props.startYear} - {props.endYear}</p>
                    </div>
                    <div className="col-8">
                        <h4 style={{marginTop: '8px'}}> {props.schoolName}</h4>
                        <p>{props.schoolDescription}</p>
                    </div>
                </div>
            </div>
        )
    
}

export default Education;