import React, { Component } from 'react';


class Experience extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="col-4">
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </div>
                <div className="col-8">
                    <h4 style={{marginTop: '8px'}}> {this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </div>
            </div>
        )
    }
}

export default Experience;