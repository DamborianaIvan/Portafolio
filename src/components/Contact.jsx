import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '../avatar/Avatar';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body container w-75">
                <div className="row contact-grid text-center">
                    <div className="col-md-6">
                        <h2>Ivan Gaston Damboriana</h2>
                        <Avatar />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet in eros eu pretium. Nam molestie dolor in dolor imperdiet finibus. Etiam vitae metus id sapien interdum auctor. Pellentesque ut nisl mollis, gravida est sit amet, suscipit tellus. Nam in leo eu nibh laoreet mollis quis ac elit. </p>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Me</h2>
                        <hr/>   
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className=" fa fa-phone-square" aria-hidden="true" />
                                        (0249)-154464686
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className=" fa fa-envelope" aria-hidden="true" />
                                            ivangastondamb@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className=" fa fa-skype" aria-hidden="true" />
                                            ivangastondamb@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                            <i className=" fa fa-linkedin-square" aria-hidden="true" />
                                          /ivangastondamboriana
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;