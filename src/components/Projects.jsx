import React, {Component} from 'react';
import {
Tabs,
Tab,
Grid,
Cell,
Card,
CardTitle,
CardText,
CardActions,
Button,
CardMenu,
IconButton } from 'react-mdl';
import Project from './Project';

class Proyects extends Component {
    constructor(...props){
    super(...props);

    this.state={activeTab: 0};

    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="row">
                    <Project />
                <Project />
                <Project />
                <Project />
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
            <div>
                <h1>BOOTSTRAP</h1>
            </div>
            )
        }else if(this.state.activeTab === 2){
            return(
            <div>
                <h1>PHP</h1>
            </div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>PHP</Tab>
                </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Proyects;