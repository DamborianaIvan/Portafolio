import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LandingPage from './Landingpage';
import AboutMe from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';



const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>

    </Switch>
)

export default Main;