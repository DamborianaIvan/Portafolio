import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Avatar from '../avatar/Avatar';

class Resume extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div style={{textAlign:'center' }}>
                            <Avatar />
                        </div>

                        <h2 style={{paddingTop:'2em'}}>Damboriana Ivan Gaston</h2>
                        <h4 style={{color:'grey'}}>Front end Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Nací el 18/09/1997 (22 años); actualmente soy estudiante, en busca
de poder progresar, no solo de forma académica sino también laboral.
Estoy cursando la Tecnicatura Universitaria en Desarrollo de
Aplicaciones Informáticas en UNICEN sede de Tandil.
Tengo facilidad en aprender, y tengo preferencia del trabajo en
equipo, debido a que un grupo de personas pueden actuar de mejor
manera que de forma individual</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Adress</h5>
                        <p>Tandil - Buenos Aires - Argentina</p>
                        <h5>Phone</h5>
                        <p>(249)-154464686</p>
                        <h5>Email</h5>
                        <p>ivangastondamb@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://portfolioivandambo.web.app/</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </div>

                    <div className="resume-right-col  col-md-8">


                        {/* EDUCACION*/}
                        <h2 className="title-resume">Educacion</h2>
                        <Education 
                            startYear={2009}
                            endYear={2015}
                            schoolName="Carmelo Sanchez EES N°3 - Balcarce"
                            schoolDescription="Bachillerato en administracion y economia."
                        />
                         <Education 
                            startYear={2016}
                            endYear={2018}
                            schoolName="UNICEN"
                            schoolDescription="Ingenieria en sistemas (1 año)"
                        />
                         <Education 
                            startYear={2019}
                            endYear="Actually"
                            schoolName="UNICEN"
                            schoolDescription="TUDAI(Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas)"
                        />
                        

                        <hr style={{borderTop:'3px solid #4682B4'}}/>




                        {/* EXPERIENCIA */}
                        <h2 className="title-resume">Experiencia</h2>
                        <Experience 
                            startYear={2018}
                            endYear="Actualmente"
                            jobName="Mantenimientos y trabajos de pc en Gral."
                           
                        />
                        <Experience 
                            startYear={2019}
                            endYear="Actually"
                            jobName="Web Developer"
                            jobDescription="Actualmente estoy trabajando en proyectos propios."
                        />
                        
                        <hr style={{borderTop:'3px solid #4682B4'}}/>

                        {/* Habilidades */}
                        <h2>Habilidades</h2>
                        <Skills 
                            skill="HTML5"
                            progress={90}
                        />
                        <Skills 
                            skill="JS"
                            progress={75}
                        />
                        <Skills 
                            skill="CSS3"
                            progress={85}
                        />
                        <Skills 
                            skill="REACT"
                            progress={59}
                        />
                        <Skills 
                            skill="API-REST"
                            progress={60}
                        />
                        <Skills 
                            skill="PHP"
                            progress={45}
                        />
                        <Skills 
                            skill="BOOTSTRAP"
                            progress={78}
                        />
                        <Skills 
                            skill="SQL"
                            progress={50}
                        />
                        <Skills 
                            skill="MYSQL"
                            progress={50}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;