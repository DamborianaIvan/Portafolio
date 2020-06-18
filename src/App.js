import React from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout >
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Mi portafolio</Link>} >
                <Navigation>           
                    <Link to="/projects">Proyectos</Link>
                    <Link to="/resume">Resumen</Link>
                    <Link to="/contact">Contacto</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">Mi portafolio</Link>}>
                <Navigation>                
                    <Link to="/projects">Proyectos</Link>
                    <Link to="/resume">Resumen</Link>
                    <Link to="/contact">Contacto</Link>
                </Navigation>
            </Drawer>
            <Content className="landing-grid">
                <div className="" />
                <Main />
            </Content>
        </Layout>
</div>
  );
}

export default App;
