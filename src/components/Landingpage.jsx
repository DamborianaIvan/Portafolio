import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div className="container-fluid landing-grid h-100" >
                
                    <div className="container text-center">
                        <img
                            src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="container banner-text">
                            <h1>Front end Developer</h1>

                            <hr/>

                            <p>HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | PHP | MYSQL | API-REST </p>

                            <div className="social-links">

                                {/*Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Facebook */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </div>
               
            </div>
        )
    }
}

export default Landing;