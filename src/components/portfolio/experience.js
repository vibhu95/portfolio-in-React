import React,{Component} from "react";
import {Cell, Grid} from "react-mdl";

class Experience extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}, {this.props.company}</h4>
                    <p>{this.props.location}</p>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Experience;