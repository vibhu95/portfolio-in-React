import React, {Component} from "react";
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import imageSelf from '../../assets/self.jpeg';

class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3 style={{fontWeight:'400'}}>Vibhuti Narayan</h3>
                        <img
                            src={imageSelf}
                            alt="avatar"
                            style={{height:'200px', borderRadius:'20px'}}
                        />
                        <p style={{ width:'75%', margin:'auto', paddingTop:'4em'}}>Post Graduated in Advanced Computing from CDAC and Computer Science Engineering from VBSP University. Expertise in Healthcare Solutions, Third Party Integrations, Aviation Solutions, Hospitality Solutions, HRMS Solutions, Payment Solutions, Reporting Solutions, Architecture Designing.
                         </p>
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        (+91) 8299471901
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        vibhutinarayan995@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px'}}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        vibhutinarayan95
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Contact;