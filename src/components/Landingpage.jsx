import React, {Component} from 'react';
import Avatar from '../avatar/Avatar';
import axios from '../axios-cofes';



class Landing extends Component {
    state ={
        cafesInvitados: 0
    }

    sumarCafe = () => {
        
        let cafeActuales = this.state.cafesInvitados;
        alert('Seguro que queres invitar un cafe a Ivan?');
        this.setState({cafesInvitados:cafeActuales+1});
        alert('Gracias por tu cafe!!');
        const cofes = {
            cafes:this.state.cafesInvitados
        }
        axios.post('/cofes/-MAaid4tD_iujDmNnxVD', cofes)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return(
            <div className="container-fluid landing-grid h-100" >
                
                    <div className="container text-center">
                        
                        <div className="container banner-text mt-5">
                            <Avatar />

                            <h1>Front end Developer</h1>

                            <hr/>

                            <p>HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | PHP | MYSQL | API-REST </p>

                            <div className="social-links text-center">

                                {/*Linkedin */}
                                <a href="https://www.linkedin.com/in/ivangastondamboriana/" className="btn-neon" rel="noopener noreferrer" target="_blank">
                                    
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github */}
                                <a href="https://github.com/DamborianaIvan" className="btn-neon" rel="noopener noreferrer" target="_blank">
                                <span id="span1"></span>
                                    
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Facebook */}
                                <a href="http://facebook.com/damborianaivan" className="btn-neon" rel="noopener noreferrer" target="_blank">
                                <span id="span1"></span>
                                
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                        <div className="container-fluid banner-text w-100">
                            <div className="row justify-content-around mt-5">
                                <div className="col-4 mt-3 ">
                                    <h2 className="mt-2 titulo-cafe">Invitame un cafe!!</h2>
                                    <button type="button" class="btn btn-success mt-2" onClick={this.sumarCafe}>Invitar cafe a Ivan</button>          
                                    <p className="mt-2">Cafes invitados: {this.state.cafesInvitados}</p>        
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
               
            </div>
        )
    }
}

export default Landing;